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
		"content": `<style>.mnbd3_fmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H4v-19h13v9.2M4 7h13M7 10.5h.01m2.49 0H14M7 14h.01m2.49 0h3M7 17.5h.01m10.99-3v7M14.5 18h7");
}
</style><path class="mnbd3_fmg"/>`,
		"fallback": "uix-sharp:shift-overtime",
	});
}

export default Component;
