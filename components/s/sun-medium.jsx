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
		"content": `<style>.o_m_psi6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm5-9.75v2m0 15.5v2M2.25 12h2m15.5 0h2M6.5 6.5L5 5m12.5 1.5L19 5M6.5 17.5L5 19m12.5-1.5L19 19");
}
</style><path class="o_m_psi6t"/>`,
		"fallback": "uix-sharp:sun-medium",
	});
}

export default Component;
