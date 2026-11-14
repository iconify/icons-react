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
		"content": `<style>.goe782tjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5v14m3-13v3.5m0 1v3m0 1V18m0-10.5h7v-4m-7 13h7v4M2.5 12H8");
}
</style><path class="goe782tjv"/>`,
		"fallback": "uix:mosfet",
	});
}

export default Component;
