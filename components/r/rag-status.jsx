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
		"content": `<style>.hdmjc45hg {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 5.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_a1fhber {
  d: path("M11.375 2h1.25A4.375 4.375 0 0 1 17 6.375v11.25A4.375 4.375 0 0 1 12.625 22h-1.25A4.375 4.375 0 0 1 7 17.625V6.375A4.375 4.375 0 0 1 11.375 2");
}

.tgh01bbbd {
  fill: currentColor;
  d: path("M10 6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="o_a1fhber"/><path class="tgh01bbbd"/><path class="hdmjc45hg"/></g>`,
		"fallback": "uix:rag-status",
	});
}

export default Component;
