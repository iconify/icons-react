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

.nfph_5bvk {
  d: path("M9.807 10.627L12.5 9.55a1.5 1.5 0 0 1 1.95 1.95l-1.077 2.693A.753.753 0 0 1 12 14.25l-.526-1.053a1.5 1.5 0 0 0-.671-.671L9.75 12a.753.753 0 0 1 .057-1.373m1.443 2.123l4.5-4.5");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="nfph_5bvk"/></g>`,
		"fallback": "uix:send-circle",
	});
}

export default Component;
