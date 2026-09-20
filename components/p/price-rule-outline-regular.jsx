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
		"content": `<style>.ji_wj2bhp {
  d: path("m9 9 3 3 3 -3");
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.rrzohjbez {
  d: path("M12 12v3");
}
</style><g class="nrj6p8qat"><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="ji_wj2bhp"/><path class="rrzohjbez"/></g>`,
		"fallback": "iconmind:price-rule-outline-regular",
	});
}

export default Component;
