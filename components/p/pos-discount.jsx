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
		"content": `<style>.ym3ys4m0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8.5l9.5 9.5l-8.5 8.5L3 11.5Zm4.5 9L12 7.5m-4.5 0h.01m4.99 5h.01");
}
</style><path class="ym3ys4m0x"/>`,
		"fallback": "uix-sharp:pos-discount",
	});
}

export default Component;
