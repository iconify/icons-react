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
		"content": `<style>.dfx_lvb0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l2.25-14L7 17.5Zm7.25 0L12 3.5l2.25 14Zm7.25 0l2.25-14l2.25 14ZM2.5 21h19");
}
</style><path class="dfx_lvb0k"/>`,
		"fallback": "uix-sharp:tree-row",
	});
}

export default Component;
