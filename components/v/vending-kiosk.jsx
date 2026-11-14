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
		"content": `<style>.bksmtb6ys {
  d: path("M7.25 4.75h6a1.5 1.5 0 0 1 1.5 1.5v9.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-9.5a1.5 1.5 0 0 1 1.5-1.5m3 0v12.5m-4.5-8.5h9m-9 4.25h9m3-6.5h.01M16.75 10h2M6.5 19.5H14");
}

.d-y-mqg9z {
  d: path("M6.125 2.5h11.75A2.625 2.625 0 0 1 20.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875V5.125A2.625 2.625 0 0 1 6.125 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d-y-mqg9z"/><path class="bksmtb6ys"/></g>`,
		"fallback": "uix:vending-kiosk",
	});
}

export default Component;
