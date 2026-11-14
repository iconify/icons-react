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
		"content": `<style>.c18cyra9h {
  d: path("M15 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m.5 3.5L11 13l3 3l-2 5m-1-8l-3.5 3l-3.5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unf0dck7i {
  d: path("m8 10l3.5-2.5h4l3 4l2.5-1M2.5 8h4m-4 3.5h3");
}
</style><g class="hntgybcog"><path class="c18cyra9h"/><path class="unf0dck7i"/></g>`,
		"fallback": "uix:sprint",
	});
}

export default Component;
