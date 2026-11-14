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

.lpu1rmbar {
  d: path("M2.5 14a9.5 9 0 0 1 19 0v5h-19Zm0 0h19");
}

.rxwbqqflb {
  d: path("M12 5a4.5 9 0 0 1 4.5 9M12 5a4.5 9 0 0 0-4.5 9");
}
</style><g class="hntgybcog"><path class="lpu1rmbar"/><path class="rxwbqqflb"/></g>`,
		"fallback": "uix:stadium-roof",
	});
}

export default Component;
