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
		"content": `<style>.w0hoo0bie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15c4 0 5.5-10.5 9-10.5S17 15 21 15M7.5 19h9m-9-2v4m9-4v4");
}
</style><path class="w0hoo0bie"/>`,
		"fallback": "uix:standard-deviation",
	});
}

export default Component;
