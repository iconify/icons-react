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
		"content": `<style>.f8ee7eo9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11a2 2 0 0 1 2 2v10h-4v3h-7v-3h-4v-10a2 2 0 0 1 2-2M9 8v3.5M12 8v3.5M15 8v3.5");
}
</style><path class="f8ee7eo9z"/>`,
		"fallback": "uix:phone-jack",
	});
}

export default Component;
