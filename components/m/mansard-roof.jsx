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
		"content": `<style>.govl2crwh {
  d: path("m4.315 11.172l2.275-6.5A1.75 1.75 0 0 1 8.242 3.5h7.516a1.75 1.75 0 0 1 1.652 1.172l2.275 6.5a1.75 1.75 0 0 1-1.652 2.328H5.967a1.75 1.75 0 0 1-1.652-2.328");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qgerh9utl {
  d: path("M5.5 13.5V21h13v-7.5");
}
</style><g class="hntgybcog"><path class="govl2crwh"/><path class="qgerh9utl"/></g>`,
		"fallback": "uix:mansard-roof",
	});
}

export default Component;
