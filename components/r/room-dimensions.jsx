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
		"content": `<style>.jt67d0bhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H11V9h10.5v7.5h-19v-14m0 17.5h19m-19-1.5v3m19-3v3m-17-2.75L2.5 20l2 1.25m15-2.5l2 1.25l-2 1.25");
}
</style><path class="jt67d0bhx"/>`,
		"fallback": "uix-sharp:room-dimensions",
	});
}

export default Component;
