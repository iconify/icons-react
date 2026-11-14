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
		"content": `<style>.biq4ztybp {
  d: path("M12 2.5s-7 8-7 12.5a7 7 0 0 0 14 0c0-4.5-7-12.5-7-12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3843ibrj {
  d: path("M8.5 15.5A3.5 3.5 0 0 0 12 19");
}
</style><g class="hntgybcog"><path class="biq4ztybp"/><path class="r3843ibrj"/></g>`,
		"fallback": "uix:rain-drop",
	});
}

export default Component;
