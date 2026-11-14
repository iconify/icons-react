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
		"content": `<style>.ad_yaubju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15.5a5 5 0 1 1 6 0V18H9Zm1 5.25h4M12 2v1.75M4.5 5L6 6.5M19.5 5L18 6.5");
}
</style><path class="ad_yaubju"/>`,
		"fallback": "uix:lightbulb-on",
	});
}

export default Component;
