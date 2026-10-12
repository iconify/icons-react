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
		"content": `<style>.o0cwj2-md {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a9.25 9.25 0 0 1 0 18.5a4.75 9.25 0 0 1 0-18.5M6.05 4.91a9.25 9.25 0 0 0 0 14.18");
}
</style><path class="o0cwj2-md"/>`,
		"fallback": "iconoven:moon-gibbous",
	});
}

export default Component;
