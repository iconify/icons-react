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

.hpmnlabtt {
  d: path("M6 9h12");
}

.jdqylbbkf {
  d: path("m9 14 2 2 4 -4");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}
</style><g class="hntgybcog"><path class="n09nomjwg"/><path class="hpmnlabtt"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:security-header-outline-thin",
	});
}

export default Component;
