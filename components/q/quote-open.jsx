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
		"content": `<style>.glbov0buj {
  d: path("M3.75 15.5c0-4.5 2-7.5 5.75-9m4.25 9a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mv_gf-56q {
  d: path("M3.75 15.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.y3honzxlq {
  d: path("M13.75 15.5c0-4.5 2-7.5 5.75-9");
}
</style><g class="hntgybcog"><path class="mv_gf-56q"/><path class="glbov0buj"/><path class="y3honzxlq"/></g>`,
		"fallback": "uix:quote-open",
	});
}

export default Component;
