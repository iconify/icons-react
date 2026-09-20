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
		"content": `<style>.abchdfb3i {
  d: path("M4 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owdk3hf1a {
  d: path("m18 8 4 4 -4 4");
}

.uicwdzbry {
  d: path("M10 17V6");
}

.yl8oldl7l {
  d: path("m13 8 4 4 -4 4");
}
</style><g class="hntgybcog"><path class="abchdfb3i"/><path class="uicwdzbry"/><path class="yl8oldl7l"/><path class="owdk3hf1a"/></g>`,
		"fallback": "iconmind:tempo-outline-thin",
	});
}

export default Component;
