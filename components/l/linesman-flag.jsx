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
		"content": `<style>.nczuh-73j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19M6.5 3h11A1.5 1.5 0 0 1 19 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 11.5v-7A1.5 1.5 0 0 1 6.5 3M12 3v10M5 8h14");
}
</style><path class="nczuh-73j"/>`,
		"fallback": "uix:linesman-flag",
	});
}

export default Component;
