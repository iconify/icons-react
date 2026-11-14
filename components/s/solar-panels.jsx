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
		"content": `<style>.hz_0pgb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h18v10H3Zm6 0v10m6-10v10M3 10h18m-9 5v5m-4 .5h8");
}
</style><path class="hz_0pgb7l"/>`,
		"fallback": "uix-sharp:solar-panels",
	});
}

export default Component;
