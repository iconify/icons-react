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
		"content": `<style>.thuerya1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16m-16 17h16M12 6.25v11.5M9.75 8.5L12 6.25l2.25 2.25m-4.5 7L12 17.75l2.25-2.25");
}
</style><path class="thuerya1a"/>`,
		"fallback": "iconoven:max-height",
	});
}

export default Component;
