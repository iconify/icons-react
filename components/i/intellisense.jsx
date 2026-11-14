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
		"content": `<style>.boyqfsb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 8l-4 4l4 4m10-8l4 4l-4 4M12 5v14M10 5h4m-4 14h4");
}
</style><path class="boyqfsb5b"/>`,
		"fallback": "uix:intellisense",
	});
}

export default Component;
