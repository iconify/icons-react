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
		"content": `<style>.pcdwjfvem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5h6m-3 0v-19m0 1.5h14m-14 5.5l5-5.5m5 0v7.5m-2.5 3l2.5-3l2.5 3m-6 0h7v6h-7Z");
}
</style><path class="pcdwjfvem"/>`,
		"fallback": "uix-sharp:jib-crane",
	});
}

export default Component;
