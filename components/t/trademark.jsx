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
		"content": `<style>.gc22v1kbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h7.5m-3.75 0v9.5m6.75 0v-9.5l3.75 5l3.75-5v9.5");
}
</style><path class="gc22v1kbi"/>`,
		"fallback": "iconoven:trademark",
	});
}

export default Component;
