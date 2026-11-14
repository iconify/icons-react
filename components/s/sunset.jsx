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
		"content": `<style>.spvk_ghjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 19.5a5 5 0 0 1 10 0m-14.5 0h19M12 4v7.5M9.5 9l2.5 2.5L14.5 9m-8 5L5 12.5M17.5 14l1.5-1.5");
}
</style><path class="spvk_ghjr"/>`,
		"fallback": "uix-sharp:sunset",
	});
}

export default Component;
