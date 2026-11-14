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
		"content": `<style>.yjyw9qshe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 7.75Q17 4.5 21 3q-1.5 4-4.75 9.25ZM14 10l-2.75 2.75m-.922-1.2l2.122 2.122l-7.778 7.778l-2.122-2.122Z");
}
</style><path class="yjyw9qshe"/>`,
		"fallback": "uix-sharp:transplanting-trowel",
	});
}

export default Component;
