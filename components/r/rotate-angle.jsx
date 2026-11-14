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

.nk7zu1biy {
  d: path("M9.353 13.055A8 8 0 0 1 12 19m4.75-9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.rg6tiacqz {
  d: path("M20.5 19H4L15.5 6");
}
</style><g class="hntgybcog"><path class="rg6tiacqz"/><path class="nk7zu1biy"/></g>`,
		"fallback": "uix:rotate-angle",
	});
}

export default Component;
