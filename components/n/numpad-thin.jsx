import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xf450qbhj {
  fill: currentColor;
  d: path("M76 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m52-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M64 92a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M64 148a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 56a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64-56a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="xf450qbhj"/>`,
		"fallback": "ph:numpad-thin",
	});
}

export default Component;
