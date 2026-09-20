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
		"content": `<style>.eiprk3b7d {
  d: path("M11 10h6c0 2.5 -1.5 4 -3 4s-3 -1.5 -3 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uk66x15py {
  d: path("M4 3v18h16V3Z");
}

.wuvisubmw {
  d: path("M8 3v18");
}
</style><g class="hntgybcog"><path class="uk66x15py"/><path class="wuvisubmw"/><path class="eiprk3b7d"/></g>`,
		"fallback": "iconmind:recipe-book-outline-thin",
	});
}

export default Component;
