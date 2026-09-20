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

.ppivcbbzp {
  d: path("M5 4v16");
}

.qd0z4jbov {
  d: path("M16.5 9.5 19 12l-2.5 2.5");
}

.qjej79sen {
  d: path("M12.5 12H17");
}

.t87ohzbeq {
  d: path("M9 4v16");
}
</style><g class="hntgybcog"><path class="ppivcbbzp"/><path class="t87ohzbeq"/><path class="qjej79sen"/><path class="qd0z4jbov"/></g>`,
		"fallback": "iconmind:wait-until-outline-thin",
	});
}

export default Component;
