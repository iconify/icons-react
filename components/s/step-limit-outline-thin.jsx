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
		"content": `<style>.gg6jr8oaf {
  d: path("M21 4v16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8t37dedd {
  d: path("M3 6h5v5h5v5h5");
}
</style><g class="hntgybcog"><path class="v8t37dedd"/><path class="gg6jr8oaf"/></g>`,
		"fallback": "iconmind:step-limit-outline-thin",
	});
}

export default Component;
