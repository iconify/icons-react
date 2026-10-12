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
		"content": `<style>.l17ad8moe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.75A8.25 8.25 0 1 0 19.25 13H11Zm3.5 4.75l6-6m-4 0h4v4");
}
</style><path class="l17ad8moe"/>`,
		"fallback": "iconoven:market-share",
	});
}

export default Component;
