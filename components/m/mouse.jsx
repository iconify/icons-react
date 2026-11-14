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
		"content": `<style>.re_tq2lhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za5.5 5.5 0 0 1 5.5 5.5v7A5.5 5.5 0 0 1 12 21a5.5 5.5 0 0 1-5.5-5.5v-7A5.5 5.5 0 0 1 12 3m0 3.5v3");
}
</style><path class="re_tq2lhu"/>`,
		"fallback": "uix:mouse",
	});
}

export default Component;
