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

.l-8pkdhvs {
  d: path("M6.5 4H4v16h2.5");
}

.vdq8lyksd {
  d: path("M18 12v6");
}

.xhwe0sbyf {
  d: path("M10 9v9");
}

.ze3hawb4v {
  d: path("M14 6v12");
}
</style><g class="hntgybcog"><path class="l-8pkdhvs"/><path class="xhwe0sbyf"/><path class="ze3hawb4v"/><path class="vdq8lyksd"/></g>`,
		"fallback": "iconmind:queue-depth-outline-thin",
	});
}

export default Component;
