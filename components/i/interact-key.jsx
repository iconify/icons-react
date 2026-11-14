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

.r94vlab9w {
  d: path("M8.25 3h7.5A5.25 5.25 0 0 1 21 8.25v7.5A5.25 5.25 0 0 1 15.75 21h-7.5A5.25 5.25 0 0 1 3 15.75v-7.5A5.25 5.25 0 0 1 8.25 3M3 17.5h18M12 6v8.5");
}

.wrjzrpbwp {
  d: path("M8.75 11.25L12 14.5l3.25-3.25");
}
</style><g class="hntgybcog"><path class="r94vlab9w"/><path class="wrjzrpbwp"/></g>`,
		"fallback": "uix:interact-key",
	});
}

export default Component;
