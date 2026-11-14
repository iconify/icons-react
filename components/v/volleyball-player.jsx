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
		"content": `<style>.ddeq15b5c {
  d: path("M15.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.eo0lq9ohq {
  d: path("M7 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2 5.75L7.75 15.5l3.75 2.75l-1 3.25m-2.75-6l-3.25 3L3 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pn6kuqbsl {
  d: path("m4 10l5 1.25L16.25 7");
}
</style><g class="hntgybcog"><path class="eo0lq9ohq"/><path class="pn6kuqbsl"/><path class="ddeq15b5c"/></g>`,
		"fallback": "uix:volleyball-player",
	});
}

export default Component;
