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
		"content": `<style>.bnyx-wbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19m-16 3l6.5 8.75c.75 1 1.5 1.75 2.5 1.75m4.75-3h.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 19h-.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="bnyx-wbvw"/>`,
		"fallback": "uix:underwater-hockey",
	});
}

export default Component;
