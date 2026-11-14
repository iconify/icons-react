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

.lizzrcblo {
  d: path("M3 10.5a9 5 0 1 0 18 0a9 5 0 1 0-18 0M2.5 19h19");
}

.xtg22db0a {
  d: path("M7.5 10.5a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="lizzrcblo"/><path class="xtg22db0a"/></g>`,
		"fallback": "uix:landing-zone",
	});
}

export default Component;
