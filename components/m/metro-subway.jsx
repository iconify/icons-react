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
		"content": `<style>.amr3wabho {
  d: path("M9.75 7h4.5A1.75 1.75 0 0 1 16 8.75v.5A1.75 1.75 0 0 1 14.25 11h-4.5A1.75 1.75 0 0 1 8 9.25v-.5A1.75 1.75 0 0 1 9.75 7M8 17.5L6 21m10-3.5l2 3.5m-9.5-7h.01m6.99 0h.01");
}

.egs8cybnf {
  d: path("M10.25 3.5h3.5A5.25 5.25 0 0 1 19 8.75v3.5a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 12.25v-3.5a5.25 5.25 0 0 1 5.25-5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="egs8cybnf"/><path class="amr3wabho"/></g>`,
		"fallback": "uix:metro-subway",
	});
}

export default Component;
