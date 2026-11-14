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
		"content": `<style>.qny6ybbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3l8 7m0-7l-8 7m4-3.5v15M9.5 14H20a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 17H9.5A1.5 1.5 0 0 1 8 15.5A1.5 1.5 0 0 1 9.5 14");
}
</style><path class="qny6ybbeo"/>`,
		"fallback": "uix:railway-crossing",
	});
}

export default Component;
