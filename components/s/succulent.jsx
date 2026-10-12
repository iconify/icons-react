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
		"content": `<style>.w9j5pi30z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5c-1.75-1.5-2.25-4.75 0-9c2.25 4.25 1.75 7.5 0 9m-3 .75c-2.75 0-5.25-1.5-6.25-4c3.25 0 5.5 1.25 6.25 4m6 0c2.75 0 5.25-1.5 6.25-4c-3.25 0-5.5 1.25-6.25 4M6.5 16h11l-1.15 4.35a1.25 1.25 0 0 1-1.2.9h-6.3a1.25 1.25 0 0 1-1.2-.9Z");
}
</style><path class="w9j5pi30z"/>`,
		"fallback": "iconoven:succulent",
	});
}

export default Component;
