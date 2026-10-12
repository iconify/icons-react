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
		"content": `<style>.hhcgombdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.4 2.5 3.5 5.6 3.5 9.25s-1.1 6.75-3.5 9.25c-2.4-2.5-3.5-5.6-3.5-9.25S9.6 5.25 12 2.75M2.75 8.5h4m-4 7h4M17 9.25L21.25 12M17 14.75L21.25 12");
}
</style><path class="hhcgombdv"/>`,
		"fallback": "iconoven:lens",
	});
}

export default Component;
