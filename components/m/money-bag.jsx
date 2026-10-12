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
		"content": `<style>.eyws73bsg {
  d: path("M9.5 8h5c3.5 2.5 6.25 5.75 6.25 8.75a4.5 4.5 0 0 1-4.5 4.5h-8.5a4.5 4.5 0 0 1-4.5-4.5c0-3 2.75-6.25 6.25-8.75m-.75-5.25h6.5l-1.5 3h-3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytlu6db1d {
  d: path("M13.71 13.04c-.25-.62-.93-1.08-1.71-1.08c-.99 0-1.71.56-1.71 1.33c0 1.77 3.56.99 3.56 2.88c0 .81-.78 1.36-1.86 1.36c-.84 0-1.55-.46-1.86-1.08M12 10.88v1.08m0 5.58v1.08");
}
</style><g class="hntgybcog"><path class="eyws73bsg"/><path class="ytlu6db1d"/></g>`,
		"fallback": "iconoven:money-bag",
	});
}

export default Component;
