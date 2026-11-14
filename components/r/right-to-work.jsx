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
		"content": `<style>.e8ft86b9l {
  d: path("M10.75 8.5a1.25 3.25 0 1 0 2.5 0a1.25 3.25 0 1 0-2.5 0M9 16.5l2 2l4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tfvr3pske {
  d: path("M7.125 2.5h9.75A2.625 2.625 0 0 1 19.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 18.875V5.125A2.625 2.625 0 0 1 7.125 2.5");
}

.ye8-j_2mj {
  d: path("M8.75 8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="tfvr3pske"/><path class="ye8-j_2mj"/><path class="e8ft86b9l"/></g>`,
		"fallback": "uix:right-to-work",
	});
}

export default Component;
