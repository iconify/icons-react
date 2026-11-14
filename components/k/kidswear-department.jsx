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
		"content": `<style>.ztz-2sblm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11h11l1 10.5h-5L12 17l-1.5 4.5h-5Zm2-5.5h7V11h-7Zm0 0L7 2.5m8.5 3l1.5-3m-6.5 5.75h3");
}
</style><path class="ztz-2sblm"/>`,
		"fallback": "uix-sharp:kidswear-department",
	});
}

export default Component;
