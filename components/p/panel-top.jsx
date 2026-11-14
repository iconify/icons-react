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
		"content": `<style>.q_fx1qobv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.8 18H2.5V2.5h17v9.3M2.5 9h17m-.75 12.5V15m-3 3l3-3l3 3");
}
</style><path class="q_fx1qobv"/>`,
		"fallback": "uix-sharp:panel-top",
	});
}

export default Component;
