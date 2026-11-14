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
		"content": `<style>.ul340fp9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5L3 4v14.5l9 1.5l9-1.5V4Zm0 0V20M6 8.5L9 9m-3 3l3 .5M15 9l3-.5m-3 4l3-.5");
}
</style><path class="ul340fp9l"/>`,
		"fallback": "uix:reader-letter",
	});
}

export default Component;
