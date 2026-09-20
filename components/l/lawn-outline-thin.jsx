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
		"content": `<style>.f__nic5ty {
  d: path("M12 18V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcne0zbsf {
  d: path("M17 18c0 -4 1 -7 2 -11");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.tktvzqb2t {
  d: path("M7 18c0 -4 -1 -7 -2 -11");
}
</style><g class="hntgybcog"><path class="o8od38cnm"/><path class="tktvzqb2t"/><path class="f__nic5ty"/><path class="mcne0zbsf"/></g>`,
		"fallback": "iconmind:lawn-outline-thin",
	});
}

export default Component;
