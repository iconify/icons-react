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
		"content": `<style>.d6eqw_b9l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M9.67 18a4 4 0 0 1 1.94-7.23a3.25 3.25 0 0 0 4.37 4.37A4 4 0 0 1 14.33 18ZM12 7.75V3.5M9.75 5.75L12 3.5l2.25 2.25");
}

.dbfrcacjm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.5 8h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d6eqw_b9l"/><path class="dbfrcacjm"/></g>`,
		"fallback": "iconoven:moonrise-sharp",
	});
}

export default Component;
