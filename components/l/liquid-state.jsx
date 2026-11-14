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

.jf3t14brx {
  d: path("M5 8.5V17a3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 19 17V8.5");
}

.w3uc6w-0n {
  d: path("M5 14q1.75-1.5 3.5 0t3.5 0t3.5 0t3.5 0M12 3S9.75 5.5 9.75 6.75a2.25 2.25 0 0 0 4.5 0C14.25 5.5 12 3 12 3");
}
</style><g class="hntgybcog"><path class="jf3t14brx"/><path class="w3uc6w-0n"/></g>`,
		"fallback": "uix:liquid-state",
	});
}

export default Component;
