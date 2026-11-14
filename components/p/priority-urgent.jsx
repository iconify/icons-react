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
		"content": `<style>.athl_4-oa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19m0-18h14.5l-3 5.75l3 5.75H5m6-8.75v3.5m0 2.75h.01");
}
</style><path class="athl_4-oa"/>`,
		"fallback": "uix-sharp:priority-urgent",
	});
}

export default Component;
