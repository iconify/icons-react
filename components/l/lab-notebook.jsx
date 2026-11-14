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
		"content": `<style>.eqt88e7xb {
  d: path("M12 6h1a1 1 0 0 1 1 1v.711a1.5 1.5 0 0 0 .107.557l1.07 2.675A1.5 1.5 0 0 1 13.784 13h-2.568a1.5 1.5 0 0 1-1.393-2.057l1.07-2.675A1.5 1.5 0 0 0 11 7.711V7a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wuixsugxy {
  d: path("M5 18.5V5a2 2 0 0 1 2-2h12v13.5H7a2 2 0 0 0 0 4h12");
}
</style><g class="hntgybcog"><path class="wuixsugxy"/><path class="eqt88e7xb"/></g>`,
		"fallback": "uix:lab-notebook",
	});
}

export default Component;
