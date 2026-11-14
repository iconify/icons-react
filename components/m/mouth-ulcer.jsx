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

.ngnowyw1l {
  d: path("M2.5 12c4.5 1 14.5 1 19 0M9 15h.01");
}

.rdymyfb-k {
  fill: currentColor;
  d: path("M12.75 18.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.y4_l21gux {
  d: path("M10.11 17.327C7.269 16.803 4.549 15.073 2.5 12C5 8.5 8 7 10.25 7.75L12 8.5l1.75-.75C16 7 19 8.5 21.5 12c-.859 1.288-1.836 2.341-2.89 3.167");
}
</style><g class="hntgybcog"><path class="y4_l21gux"/><path class="ngnowyw1l"/><path class="rdymyfb-k"/></g>`,
		"fallback": "uix:mouth-ulcer",
	});
}

export default Component;
