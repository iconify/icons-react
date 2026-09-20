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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qfknm1bfo {
  d: path("M7.5 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tys_c3bfo {
  d: path("m16 11 2 2 3 -3");
}

.wqb-ezt6n {
  d: path("M4 4a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="wqb-ezt6n"/><path class="qfknm1bfo"/><path class="tys_c3bfo"/></g>`,
		"fallback": "iconmind:mfa-push-outline-thin",
	});
}

export default Component;
