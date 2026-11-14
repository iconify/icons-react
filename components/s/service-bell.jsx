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
		"content": `<style>.wrum_tg_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17a8 8 0 0 1 16 0Zm-1.5 3.5h19M12 5.5V9m-1.75-3.5h3.5");
}
</style><path class="wrum_tg_b"/>`,
		"fallback": "uix:service-bell",
	});
}

export default Component;
