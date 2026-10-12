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
		"content": `<style>.k5srfkbfj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 9.25h.01m4.49 0h.01m4.49 0h.01");
}

.ra_g3klqd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.5H5m3 0h3.5m3 0h6");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ye_c1cs8n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h18.5V13H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ye_c1cs8n"/><path class="k5srfkbfj"/><path class="ra_g3klqd"/></g>`,
		"fallback": "iconoven:password-strength-sharp",
	});
}

export default Component;
