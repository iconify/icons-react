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

.mi_rhabsp {
  d: path("m2 11 6 -6 6 6");
}

.pm0e7ny3b {
  d: path("M4 11v8h8v-8");
}

.s88iiwf1g {
  d: path("m15 19 2 -2 2 2 2 -2");
}

.tbo01n9ke {
  d: path("m15 14 2 -2 2 2 2 -2");
}
</style><g class="hntgybcog"><path class="mi_rhabsp"/><path class="pm0e7ny3b"/><path class="tbo01n9ke"/><path class="s88iiwf1g"/></g>`,
		"fallback": "iconmind:villa-outline-thin",
	});
}

export default Component;
