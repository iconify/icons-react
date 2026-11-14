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
		"content": `<style>.bq713uoow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16c0-6.5 2-9.5 5-9.5s5 3 5 9.5Zm-2.5 0h15M12 3v3.5m0 12.75h.01");
}
</style><path class="bq713uoow"/>`,
		"fallback": "uix:shop-door-bell",
	});
}

export default Component;
