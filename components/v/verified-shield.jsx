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

.lrv01dhiz {
  d: path("M12 2.5C14.5 4.25 17 5 20 5v6c0 5-3.25 8.75-8 10.5C7.25 19.75 4 16 4 11V5c3 0 5.5-.75 8-2.5");
}

.tqvs526mn {
  d: path("M8.25 12L11 14.75L15.75 10");
}
</style><g class="hntgybcog"><path class="lrv01dhiz"/><path class="tqvs526mn"/></g>`,
		"fallback": "uix:verified-shield",
	});
}

export default Component;
