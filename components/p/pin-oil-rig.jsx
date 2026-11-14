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
		"content": `<style>.rto5arbqn {
  d: path("M7.5 20.5V13L12 2.5L16.5 13v7.5M4 13h16M9 9.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vm4iw_bul {
  d: path("M3.5 20.5q2-1.5 4 0q2.25 1.5 4.5 0t4.5 0q2 1.5 4 0");
}
</style><g class="ulnmmdpxh"><path class="rto5arbqn"/><path class="vm4iw_bul"/></g>`,
		"fallback": "uix-sharp:pin-oil-rig",
	});
}

export default Component;
