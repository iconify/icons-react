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
		"content": `<style>.fg09jpbsd {
  d: path("M13 5h8v8h-8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izxeldb4t {
  d: path("M3 11h8v8H3Z");
}
</style><g class="hntgybcog"><path class="izxeldb4t"/><path class="fg09jpbsd"/></g>`,
		"fallback": "iconmind:sugar-outline-thin",
	});
}

export default Component;
