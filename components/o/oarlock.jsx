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

.ujq6mbchl {
  d: path("M9.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.w-jt02bdi {
  d: path("M4.5 3.5H7V10a5 5 0 0 0 10 0V3.5h2.5M12 15v5.5");
}
</style><g class="hntgybcog"><path class="w-jt02bdi"/><path class="ujq6mbchl"/></g>`,
		"fallback": "uix:oarlock",
	});
}

export default Component;
