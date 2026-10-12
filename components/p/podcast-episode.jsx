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

.ln9r1cbux {
  d: path("M8.82 5.82a4.5 4.5 0 0 0 0 6.36m6.36-6.36a4.5 4.5 0 0 1 0 6.36M6.7 3.7a7.5 7.5 0 0 0 0 10.6M17.3 3.7a7.5 7.5 0 0 1 0 10.6M6 17.75h12M8.5 21h7");
}

.z-ze1jbyb {
  cx: 12px;
  cy: 9px;
  r: 1.5px;
}
</style><g class="hntgybcog"><circle class="z-ze1jbyb"/><path class="ln9r1cbux"/></g>`,
		"fallback": "iconoven:podcast-episode",
	});
}

export default Component;
