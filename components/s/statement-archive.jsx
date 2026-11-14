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

.rkgwloajq {
  d: path("M10.75 15h2.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 10.75 15M9.5 5.25h5");
}

.uwtrsacgy {
  d: path("M4.75 8h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 4.75 8M4 12.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M7 8V3.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V8");
}
</style><g class="hntgybcog"><path class="uwtrsacgy"/><path class="rkgwloajq"/></g>`,
		"fallback": "uix:statement-archive",
	});
}

export default Component;
