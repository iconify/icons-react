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
		"content": `<style>.amfl_dbxf {
  d: path("M2.5 21.5h19m-17-3V14m4 4.5V10");
}

.avup37b3m {
  fill: currentColor;
  d: path("M12.5 5zA1.5 1.5 0 0 1 14 6.5V17a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 11 17V6.5A1.5 1.5 0 0 1 12.5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0xbpb-yh {
  d: path("M16.5 18.5v-10m3.5 10V13");
}
</style><g class="hntgybcog"><path class="amfl_dbxf"/><path class="avup37b3m"/><path class="m0xbpb-yh"/></g>`,
		"fallback": "uix:store-busy-times",
	});
}

export default Component;
