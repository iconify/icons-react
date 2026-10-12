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

.o0s561ses {
  width: 18px;
  height: 16px;
  x: 3px;
  y: 4px;
  rx: 2.5px;
}

.u37zhjpmp {
  d: path("M9 4v2.5M15 20v-2.5M3 9.33h2.5M21 14.67h-2.5");
}

.zmwlfxb5f {
  cx: 15px;
  cy: 9.33px;
  r: 1.25px;
}
</style><g class="hntgybcog"><rect class="o0s561ses"/><path class="u37zhjpmp"/><circle class="zmwlfxb5f"/></g>`,
		"fallback": "iconoven:rule-of-thirds",
	});
}

export default Component;
