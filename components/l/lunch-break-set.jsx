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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuqfjccbd {
  d: path("M7.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0m-4-9v3.75a1 1 0 0 0 2 0V3m-1 4.75V21m16.5 0V3c-1 1-1.5 2.75-1.5 6v3.5h1.5");
}
</style><g class="hntgybcog"><path class="zuqfjccbd"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:lunch-break-set",
	});
}

export default Component;
