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
		"content": `<style>.m90ahvb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.158 18.5H3l9-16l5.442 9.674M12 8.5v4m0 2.75h.01M18 15v6m-3-3h6");
}
</style><path class="m90ahvb8l"/>`,
		"fallback": "uix-sharp:risk-add",
	});
}

export default Component;
