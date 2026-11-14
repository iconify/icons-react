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
		"content": `<style>.bf5oictxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5v-4a7 7 0 0 1 14 0v4h-4v-4a3 3 0 0 0-6 0v4ZM3.5 17h17v3h-17ZM5 11.5h4m6 0h4");
}
</style><path class="bf5oictxs"/>`,
		"fallback": "uix-sharp:magnetic-gripper",
	});
}

export default Component;
