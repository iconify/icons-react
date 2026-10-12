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

.io41kcboo {
  d: path("M9 17a3 3 0 0 1 6 0m-3 0l1.25-1.75");
}

.u5jh6u_bp {
  d: path("M4.25 8.5h15.5M12 8.5V11m-6 0h12q1 0 1.19.98l1.62 8.29q.19.98-.81.98H4q-1 0-.81-.98l1.62-8.29Q5 11 6 11");
}
</style><g class="hntgybcog"><path class="u5jh6u_bp"/><path class="io41kcboo"/></g>`,
		"fallback": "iconoven:kitchen-scale",
	});
}

export default Component;
