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
		"content": `<style>.a7xbknbyy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6.75h.01");
}

.ujydecw_q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10V10H7z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vje23xb_d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10v3.5m-9.25 0h18.5M6 18.5h12m-2-2l2 2l-2 2");
}
</style><g class="ux2u0rbkq"><path class="ujydecw_q"/><path class="a7xbknbyy"/><path class="vje23xb_d"/></g>`,
		"fallback": "iconoven:slider-rail-sharp",
	});
}

export default Component;
