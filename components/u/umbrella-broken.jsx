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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0vt64bjv {
  d: path("M16.9145 12C16.6354 9.28874 15.5544 2 12.0002 2C8.4461 2 7.3651 9.28874 7.08594 12");
}

.yat28dhan {
  stroke-linejoin: round;
  d: path("M8 19V20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20C12 20 12 17.5621 12 16M21.5238 12H12H2.47619C2.2132 12 2 11.7868 2 11.5238C2 6.26396 6.26395 2 11.5238 2H12.4762C17.736 2 22 6.26396 22 11.5238C22 11.7868 21.7868 12 21.5238 12Z");
}
</style><g class="ipq1z-bjh"><path class="yat28dhan"/><path class="q0vt64bjv"/></g>`,
		"fallback": "solar:umbrella-broken",
	});
}

export default Component;
