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
		"content": `<style>.fmy7cbyyi {
  d: path("m7.404 4.929l11.667 11.667a1.75 1.75 0 0 1 0 2.475a1.75 1.75 0 0 1-2.475 0L4.929 7.404a1.75 1.75 0 0 1 0-2.475a1.75 1.75 0 0 1 2.475 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o70ldvb7n {
  d: path("M4.929 16.596L16.596 4.929a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475L7.404 19.071a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475");
}
</style><g class="hntgybcog"><path class="fmy7cbyyi"/><path class="o70ldvb7n"/></g>`,
		"fallback": "uix:skier-fall",
	});
}

export default Component;
