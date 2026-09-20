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

.jdo7z8-qu {
  d: path("m3 21 9 -9");
}

.w-bnpitut {
  d: path("m12 12 3 -3 4 4 -3 3Z");
}

.ws24-9bwu {
  d: path("m19 13 2 -2 -4 -4 -2 2Z");
}
</style><g class="hntgybcog"><path class="jdo7z8-qu"/><path class="w-bnpitut"/><path class="ws24-9bwu"/></g>`,
		"fallback": "iconmind:paintbrush-outline-thin",
	});
}

export default Component;
