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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4ynq5rza {
  cx: 8px;
  cy: 5px;
  r: 2.25px;
}

.y9bnwbc9b {
  d: path("m9 9l-1.5 5L4 17.25v4M7.5 14l4.5 2.5l.75 4.75m-4-11.75L16.5 8m-8 2L4 12.5m16.25-9.75v3.5m0 2.75v3.5m0 2.75v3.5");
}
</style><g class="hntgybcog"><circle class="u4ynq5rza"/><path class="y9bnwbc9b"/></g>`,
		"fallback": "iconoven:kabaddi",
	});
}

export default Component;
