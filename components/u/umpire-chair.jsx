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
		"content": `<style>.o8ufv_zqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5V10h8.5M8 10L5.5 21.5m11-11.5L19 21.5M6.75 16h11");
}
</style><path class="o8ufv_zqu"/>`,
		"fallback": "uix:umpire-chair",
	});
}

export default Component;
