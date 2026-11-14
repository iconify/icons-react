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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n796m7a7k {
  d: path("M12.192 19.615L12 19.5L9.5 21l-2.25-1.5L5 21V2.5h14V12M8.5 7h7m-7 4h4");
}

.y35pw3bof {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="n796m7a7k"/><path class="y35pw3bof"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:invoice-clock",
	});
}

export default Component;
