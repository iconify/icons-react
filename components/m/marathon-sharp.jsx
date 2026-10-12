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
		"content": `<style>.c4oqnknem {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 6.75h.01m10.49 0h.01");
}

.f1hzpac_e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 17v-6.5L6.5 15h4m3-2.5a2 2 0 0 1 4 0c0 1.75-1.5 2.5-4 4.5h4.25");
}

.r_kv_ebvo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.75h17.5v16.5H3.25z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="r_kv_ebvo"/><path class="c4oqnknem"/><path class="f1hzpac_e"/></g>`,
		"fallback": "iconoven:marathon-sharp",
	});
}

export default Component;
