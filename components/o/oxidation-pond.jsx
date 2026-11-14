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
		"content": `<style>.dzq9sycvg {
  d: path("M6.5 15q1.75-1.75 3.5 0t3.5 0t3.5 0M9 6.5h.01M12 4h.01M15 6.5h.01");
}

.hgx-itboy {
  d: path("M2.5 15a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hgx-itboy"/><path class="dzq9sycvg"/></g>`,
		"fallback": "uix:oxidation-pond",
	});
}

export default Component;
