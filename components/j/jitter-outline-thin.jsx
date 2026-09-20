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

.kyboc-b7u {
  d: path("m3 15 5 -5 2 2 4 -4 3 3 4 -4");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="kyboc-b7u"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:jitter-outline-thin",
	});
}

export default Component;
