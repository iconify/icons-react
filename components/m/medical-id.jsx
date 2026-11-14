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
		"content": `<style>.d5gn1wc6y {
  d: path("M11.125 7.5h1.75a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 12.875 15h-1.75A2.625 2.625 0 0 1 8.5 12.375v-2.25A2.625 2.625 0 0 1 11.125 7.5M12 9.25v4m-2-2h4m-3.5 7.25h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rfenysb5q {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5");
}
</style><g class="hntgybcog"><path class="rfenysb5q"/><path class="d5gn1wc6y"/></g>`,
		"fallback": "uix:medical-id",
	});
}

export default Component;
