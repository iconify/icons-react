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
		"content": `<style>.k5rsc8vss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.5v3l-1 5L4 21.5h16l-4.25-11l-1-5v-3Q12 7 9.25 2.5Zm-1 8h7.5");
}
</style><path class="k5rsc8vss"/>`,
		"fallback": "uix-sharp:maxi-dress",
	});
}

export default Component;
