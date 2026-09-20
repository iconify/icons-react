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
		"content": `<style>.d210vyb8t {
  d: path("m18 13 3 3 -3 3");
}

.dd3k_bc9g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h6l9 9h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fipykcbwt {
  d: path("M3 7h6l9 9h3");
}

.gbhru9x7j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 5 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hs_3awbse {
  d: path("m18 5 3 3 -3 3");
}

.ig2rw3qjx {
  d: path("M3 17h6l9 -9h3");
}

.w0p8oci-b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 13 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zw4bo-tup {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h6l9 -9h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="dd3k_bc9g"/><path class="w0p8oci-b"/><path class="zw4bo-tup"/><path class="gbhru9x7j"/><path class="fipykcbwt"/><path class="d210vyb8t"/><path class="ig2rw3qjx"/><path class="hs_3awbse"/></g>`,
		"fallback": "iconmind:shuffle-duotone-thin",
	});
}

export default Component;
