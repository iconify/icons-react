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
		"content": `<style>.xrawzabpd {
  fill: currentColor;
  d: path("M21 4v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-2 10V5H5v9Z");
}
</style><path class="xrawzabpd"/>`,
		"fallback": "coolicons:panel-bottom-fill-sharp",
	});
}

export default Component;
