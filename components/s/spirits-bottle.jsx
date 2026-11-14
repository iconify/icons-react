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
		"content": `<style>.ab27qxmnz {
  d: path("M11 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 18h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 13");
}

.bc9srruel {
  d: path("M6.5 11A2.5 2.5 0 0 1 9 8.5h1v-3h4v3h1a2.5 2.5 0 0 1 2.5 2.5v8.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2Zm5.25-8.5h.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bc9srruel"/><path class="ab27qxmnz"/></g>`,
		"fallback": "uix:spirits-bottle",
	});
}

export default Component;
