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
		"content": `<style>.zggypbb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V3m0 15l-4-3m4 3l4-3m-4-2l-4-3m4 3l4-3m-4-2L9 5.5M12 8l3-2.5");
}
</style><path class="zggypbb-z"/>`,
		"fallback": "uix:rosemary-sprig",
	});
}

export default Component;
