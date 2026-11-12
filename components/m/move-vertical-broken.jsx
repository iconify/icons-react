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
		"content": `<style>.frg4agggy {
  d: path("M12 22.1421L12.0001 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u_gvbhbmw {
  d: path("M12 8L12.0001 1.85791");
}

.w4qe5y36z {
  stroke-linejoin: round;
  d: path("M16.1417 18.0005L12 22.1421L7.85841 18.0005");
}

.x07ftrzei {
  stroke-linejoin: round;
  d: path("M16.1417 5.99954L12 1.85791L7.85841 5.99954");
}
</style><g class="ipq1z-bjh"><path class="frg4agggy"/><path class="u_gvbhbmw"/><path class="x07ftrzei"/><path class="w4qe5y36z"/></g>`,
		"fallback": "solar:move-vertical-broken",
	});
}

export default Component;
