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
		"content": `<style>.xjsgm2bwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 4.5l14 3l-14 3l14 3l-14 3l14 3M3 4.5h18m-18 15h18");
}
</style><path class="xjsgm2bwd"/>`,
		"fallback": "uix:spring-compressed",
	});
}

export default Component;
