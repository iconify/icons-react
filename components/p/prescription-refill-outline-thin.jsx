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
		"content": `<style>.ckrzk6zny {
  d: path("M10.5 10.5 8 13l2.5 2.5");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.t-ht_no5g {
  d: path("M4 3h14l4 4v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2m14 0v4h4");
}
</style><g class="hntgybcog"><path class="t-ht_no5g"/><path class="gcalxb98a"/><path class="ckrzk6zny"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:prescription-refill-outline-thin",
	});
}

export default Component;
