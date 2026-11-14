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
		"content": `<style>.t_aq16byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19v-6.25H15V9H8.5V2.75h-6Zm0-6.25H15M2.5 9h6");
}
</style><path class="t_aq16byb"/>`,
		"fallback": "uix-sharp:method-steps",
	});
}

export default Component;
