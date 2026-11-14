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

.m8n30vb6x {
  d: path("M12.5 16.75L9.5 11l4-3.5l3 3.5m-2.25-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.wa_8aw_gd {
  d: path("M2 16.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m12.5 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.ygpzdmy6p {
  d: path("M5.75 16.75h6.75l4-5.75l1.75 5.75");
}
</style><g class="hntgybcog"><path class="wa_8aw_gd"/><path class="ygpzdmy6p"/><path class="m8n30vb6x"/></g>`,
		"fallback": "uix:person-cycling",
	});
}

export default Component;
