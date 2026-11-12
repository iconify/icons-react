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
		"content": `<style>.akyqa1bwb {
  d: path("M17.5 10.0066C19.3597 10.0335 20.414 10.1714 21.1213 10.8788C22 11.7574 22 13.1717 22 16.0001C22 18.8285 22 20.2427 21.1213 21.1214C20.414 21.8287 19.3597 21.9667 17.5 21.9936");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kqf28c14k {
  d: path("M2 14V16C2 18.8284 2 20.2427 2.8787 21.1213C3.7574 22 5.17159 22 7.99998 22H8H9H9.00002C11.8284 22 13.2426 22 14.1213 21.1213C15 20.2427 15 18.8284 15 16V8C15 5.1716 15 3.7574 14.1213 2.8787C13.2426 2 11.8284 2 9 2H8C5.1716 2 3.7574 2 2.8787 2.8787C2 3.7574 2 5.1716 2 8V10");
}

.xja2b4ejv {
  stroke-linejoin: round;
  d: path("M20.5 6.986L22 8C22 4.9853 19.8377 2.4828 17 2");
}
</style><g class="ipq1z-bjh"><path class="kqf28c14k"/><path class="akyqa1bwb"/><path class="xja2b4ejv"/></g>`,
		"fallback": "solar:rotate-clockwise-broken",
	});
}

export default Component;
