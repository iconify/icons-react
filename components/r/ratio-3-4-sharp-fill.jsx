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
		"content": `<style>.pq26lnxvc {
  fill: currentColor;
  d: path("M4 1L20 1C20.5523 1 21 1.4477 21 2L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1Z");
}
</style><path class="pq26lnxvc"/>`,
		"fallback": "keyline-icons:ratio-3-4-sharp-fill",
	});
}

export default Component;
