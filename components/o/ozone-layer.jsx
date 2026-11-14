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
		"content": `<style>.e7h4og1sb {
  d: path("M13.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rfr0v1bub {
  d: path("M2.5 4q9.5-2 19 0m-19 13.75q9.5-2 19 0m-19 3.75q9.5-2 19 0m-16-10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.wcrotzk2u {
  d: path("M9.5 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="rfr0v1bub"/><path class="wcrotzk2u"/><path class="e7h4og1sb"/></g>`,
		"fallback": "uix:ozone-layer",
	});
}

export default Component;
