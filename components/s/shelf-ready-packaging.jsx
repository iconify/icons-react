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
		"content": `<style>.d_3rkep4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19v6.5h-19Zm2 0V9.5l1-1v-2h2v2l1 1V15m1.5 0V9.5l1-1v-2h2v2l1 1V15m1.5 0V9.5l1-1v-2h2v2l1 1V15M5.5 4.5h2m3.5 0h2m3.5 0h2M2.5 18h19");
}
</style><path class="d_3rkep4a"/>`,
		"fallback": "uix-sharp:shelf-ready-packaging",
	});
}

export default Component;
