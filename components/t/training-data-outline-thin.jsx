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
		"content": `<style>.c4my-jbpv {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnck3ibwg {
  d: path("m13.5 17 2.5 2.5 4.5 -4.5");
}

.qkea2dbiu {
  d: path("M5 6.5h14");
}

.rour4hc1e {
  d: path("M2 15a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="c4my-jbpv"/><path class="qkea2dbiu"/><path class="rour4hc1e"/><path class="pnck3ibwg"/></g>`,
		"fallback": "iconmind:training-data-outline-thin",
	});
}

export default Component;
