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
		"content": `<style>.drx1bdb7s {
  d: path("m13 15 3 3 5 -5");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.h57sc1bmw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 15 3 3 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja0_o1hya {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kh4dfab7k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3h9l-3 3 3 3H6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tkvxdludj {
  d: path("M6 3h9l-3 3 3 3H6");
}
</style><g class="hntgybcog"><path class="ja0_o1hya"/><path class="kh4dfab7k"/><path class="h57sc1bmw"/><path class="ftqzjnb8u"/><path class="tkvxdludj"/><path class="drx1bdb7s"/></g>`,
		"fallback": "iconmind:milestone-flag-duotone-thin",
	});
}

export default Component;
