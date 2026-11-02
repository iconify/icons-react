import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iqt9k4bgx {
  fill: currentColor;
  d: path("M11 4a1 1 0 0 1 1.447-.894l6 3a1 1 0 1 1-.894 1.788L13 5.618V17a4.001 4.001 0 1 1-2-3.465Z");
}
</style><path class="iqt9k4bgx"/>`,
		"fallback": "coolicons:music-note-fill-sharp",
	});
}

export default Component;
