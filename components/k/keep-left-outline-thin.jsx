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
		"content": `<style>.eeoxujb4a {
  d: path("m14 11 5 -5");
}

.h-ljjxb1p {
  d: path("M12 22v-9L5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izmrq5b4m {
  d: path("M5 10.5V6h4.5");
}
</style><g class="hntgybcog"><path class="h-ljjxb1p"/><path class="izmrq5b4m"/><path class="eeoxujb4a"/></g>`,
		"fallback": "iconmind:keep-left-outline-thin",
	});
}

export default Component;
