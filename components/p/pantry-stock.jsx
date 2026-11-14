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
		"content": `<style>.gfj4scb7h {
  d: path("M3 21.5V5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 5v16.5M3 15h18");
}

.p_ga2m_ee {
  d: path("M5.75 15v-4.5A1.5 1.5 0 0 1 7.25 9h3a1.5 1.5 0 0 1 1.5 1.5V15m-4.5-8.75h3M14.5 15v-5h3.75v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gfj4scb7h"/><path class="p_ga2m_ee"/></g>`,
		"fallback": "uix-sharp:pantry-stock",
	});
}

export default Component;
