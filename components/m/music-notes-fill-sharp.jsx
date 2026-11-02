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
		"content": `<style>.nwa_l136f {
  fill: currentColor;
  d: path("M8 7a1 1 0 0 1 .684-.949l12-4A1.002 1.002 0 0 1 22 3v13a4.001 4.001 0 1 1-2-3.465V4.387L10 7.721V18a4.001 4.001 0 1 1-2-3.465Z");
}
</style><path class="nwa_l136f"/>`,
		"fallback": "coolicons:music-notes-fill-sharp",
	});
}

export default Component;
