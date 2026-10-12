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
		"content": `<style>.v1eqq4vfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75v18.5m14.5-18.5v18.5M12 19V5.5M8.75 8.75L12 5.5l3.25 3.25");
}
</style><path class="v1eqq4vfw"/>`,
		"fallback": "iconoven:one-way-street",
	});
}

export default Component;
