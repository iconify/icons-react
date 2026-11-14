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
		"content": `<style>.fkw1d6lbq {
  d: path("M5.75 4.5h12.5A1.75 1.75 0 0 1 20 6.25A1.75 1.75 0 0 1 18.25 8H5.75A1.75 1.75 0 0 1 4 6.25A1.75 1.75 0 0 1 5.75 4.5M5 8L3.75 19.5h6.75l1.5-6l1.5 6h6.75L19 8m-7 0l-1.25 2.75M12 8l1.25 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9kdcac5i {
  d: path("M16.5 8q.5 3.5 3 4.25");
}
</style><g class="hntgybcog"><path class="fkw1d6lbq"/><path class="w9kdcac5i"/></g>`,
		"fallback": "uix:swim-shorts-pocket",
	});
}

export default Component;
