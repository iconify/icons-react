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

.lekpozb-o {
  d: path("M12 2.5za5 5 0 0 1 5 5V8a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-.5a5 5 0 0 1 5-5m-8 19c0-3 3.5-5.5 8-5.5s8 2.5 8 5.5M7 7h10m-6.5 0v6m3-6v6");
}

.unr8p9i_x {
  d: path("M8.5 16.75v1.75a3.5 3 0 0 0 7 0v-1.75");
}
</style><g class="hntgybcog"><path class="lekpozb-o"/><path class="unr8p9i_x"/></g>`,
		"fallback": "uix:umpire-baseball",
	});
}

export default Component;
