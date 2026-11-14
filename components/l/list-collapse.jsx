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
		"content": `<style>.msp8q6n-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6h8.5M12 12h8.5M12 18h8.5M3.5 4L6 6.5L8.5 4m-5 16L6 17.5L8.5 20");
}
</style><path class="msp8q6n-t"/>`,
		"fallback": "uix:list-collapse",
	});
}

export default Component;
