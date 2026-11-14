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

.mo6d_r6_w {
  d: path("M10 5.5h4A1.5 1.5 0 0 1 15.5 7A1.5 1.5 0 0 1 14 8.5h-4A1.5 1.5 0 0 1 8.5 7A1.5 1.5 0 0 1 10 5.5m-1 6v4m3-4v4m3-4v4");
}

.o2uygihlr {
  d: path("M3.25 11a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0M12 19.75V22");
}
</style><g class="hntgybcog"><path class="o2uygihlr"/><path class="mo6d_r6_w"/></g>`,
		"fallback": "uix:three-phase-meter",
	});
}

export default Component;
