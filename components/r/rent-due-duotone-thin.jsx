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
		"content": `<style>.aq3-xgb-k {
  fill: currentColor;
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fbn42bcxw {
  d: path("M14 8h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jqlnd8iax {
  d: path("M2 20v-7l5 -5 5 5v7Z");
}

.u1kydjbkc {
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.v60o5chyb {
  fill: currentColor;
  d: path("M2 20v-7l5 -5 5 5v7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="v60o5chyb"/><path class="aq3-xgb-k"/><path class="jqlnd8iax"/><path class="u1kydjbkc"/><path class="fbn42bcxw"/></g>`,
		"fallback": "iconmind:rent-due-duotone-thin",
	});
}

export default Component;
