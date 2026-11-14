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
		"content": `<style>.a6bzo_-sv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5L5.5 11c0-4 3-7 6.5-7s6.5 3 6.5 7Zm0 0V5m0 15.5L8.5 6M12 20.5L15.5 6");
}
</style><path class="a6bzo_-sv"/>`,
		"fallback": "uix:seashell",
	});
}

export default Component;
