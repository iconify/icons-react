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

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.oy6b_1b_a {
  d: path("M3 20V10h18v10Z");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="hntgybcog"><path class="oy6b_1b_a"/><path class="ltriwmbuu"/><path class="yngda3bvc"/></g>`,
		"fallback": "iconmind:toolbox-outline-thin",
	});
}

export default Component;
