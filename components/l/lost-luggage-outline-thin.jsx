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
		"content": `<style>.duisldofr {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlojnsdlu {
  d: path("M11 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rrzohjbez {
  d: path("M12 12v3");
}

.sts7iebwd {
  d: path("M9.5 10.5a2.5 2.5 0 0 1 5 0");
}

.zmc7aqkcp {
  d: path("M9 6V3h6v3");
}
</style><g class="hntgybcog"><path class="duisldofr"/><path class="zmc7aqkcp"/><path class="rrzohjbez"/><path class="jlojnsdlu"/><path class="sts7iebwd"/></g>`,
		"fallback": "iconmind:lost-luggage-outline-thin",
	});
}

export default Component;
