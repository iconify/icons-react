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
		"content": `<style>.k6slbcbeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.055 8.967l3.535 6.326a3.5 3.5 0 0 1-3.055 5.207h-7.07a3.5 3.5 0 0 1-3.055-5.207l3.535-6.326a3.5 3.5 0 0 1 6.11 0M12 10v4m0 3.25h.01");
}
</style><path class="k6slbcbeg"/>`,
		"fallback": "uix:known-issue",
	});
}

export default Component;
