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
		"content": `<style>.o8xnpdd5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5L3 21.5m11.5-19l4 11.5M12 4v2.5m0 3.5v3m0 3.5v1.4m0 .2V20m2.75-2l2 2L21 15.75");
}
</style><path class="o8xnpdd5c"/>`,
		"fallback": "uix:road-reopened",
	});
}

export default Component;
