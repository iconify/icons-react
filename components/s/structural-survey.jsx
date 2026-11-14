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

.ref6_cbxa {
  d: path("M10.75 10.75h2.5A1.75 1.75 0 0 1 15 12.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 12.5a1.75 1.75 0 0 1 1.75-1.75M12 12.5h.01M5.5 11v3m13-3v3");
}

.ucc07zaki {
  d: path("M3.75 9h16.5A1.75 1.75 0 0 1 22 10.75v3.5A1.75 1.75 0 0 1 20.25 16H3.75A1.75 1.75 0 0 1 2 14.25v-3.5A1.75 1.75 0 0 1 3.75 9M2 19.5h20");
}
</style><g class="hntgybcog"><path class="ucc07zaki"/><path class="ref6_cbxa"/></g>`,
		"fallback": "uix:structural-survey",
	});
}

export default Component;
