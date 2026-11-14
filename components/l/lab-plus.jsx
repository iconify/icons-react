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
		"content": `<style>.vccqge4pw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.231 21H3V10.5L12 3l9 7.5v4.669m0 5.6V21h-.169M18 15v6m-3-3h6");
}
</style><path class="vccqge4pw"/>`,
		"fallback": "uix-sharp:lab-plus",
	});
}

export default Component;
