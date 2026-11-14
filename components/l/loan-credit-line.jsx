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
		"content": `<style>.awhll1aee {
  d: path("M13.5 10.5q-.375-.75-1.5-.75c-.75 0-1.5.25-1.5 1c0 1.25 3 .75 3 2.5c0 .5-.75 1-1.5 1q-1.125 0-1.5-.75M12 8.75v1m0 4.5v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pwz3webjw {
  d: path("M2.25 5.75h3.5v3.5M7.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}

.s9u-ywozo {
  d: path("M18.364 5.636a9 9 0 1 1-12.728 0");
}
</style><g class="hntgybcog"><path class="s9u-ywozo"/><path class="pwz3webjw"/><path class="awhll1aee"/></g>`,
		"fallback": "uix:loan-credit-line",
	});
}

export default Component;
