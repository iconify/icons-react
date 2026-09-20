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
		"content": `<style>.a5c-jhmhz {
  d: path("m14 13 -4 4");
}

.gjjx1zbjy {
  d: path("m10 13 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}
</style><g class="hntgybcog"><path class="mcubrkb2y"/><path class="gjjx1zbjy"/><path class="a5c-jhmhz"/></g>`,
		"fallback": "iconmind:transfer-failed-outline-thin",
	});
}

export default Component;
