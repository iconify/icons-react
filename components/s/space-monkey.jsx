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

.iemzdlbeh {
  d: path("M15.25 10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-4.5 2h.01m2.49 0h.01");
}

.l5bimoh5q {
  d: path("M12 17c-3.25-.5-3.75-4-3.25-6s2.5-2.25 3.25-1c.75-1.25 2.75-1 3.25 1s0 5.5-3.25 6m-6.75-6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="l5bimoh5q"/><path class="iemzdlbeh"/></g>`,
		"fallback": "uix:space-monkey",
	});
}

export default Component;
