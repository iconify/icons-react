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
		"content": `<style>.yyc97cb9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19m-16-3l3 3l-3 3M12 9l3 3l-3 3m6.5-6l3 3l-3 3");
}
</style><path class="yyc97cb9q"/>`,
		"fallback": "uix:reaction-scheme",
	});
}

export default Component;
