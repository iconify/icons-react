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
		"content": `<style>.hs31kfk3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-9.5 0l4.5 7h-9Zm-7-8v5m-2-2l2 2l2-2");
}
</style><path class="hs31kfk3t"/>`,
		"fallback": "uix-sharp:lever-class-1",
	});
}

export default Component;
