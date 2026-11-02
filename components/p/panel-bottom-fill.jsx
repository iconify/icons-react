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
		"content": `<style>.flfdenb4b {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm16 0a1 1 0 0 0-1-1H6a.997.997 0 0 0-1 1v8h14Z");
}
</style><path class="flfdenb4b"/>`,
		"fallback": "coolicons:panel-bottom-fill",
	});
}

export default Component;
