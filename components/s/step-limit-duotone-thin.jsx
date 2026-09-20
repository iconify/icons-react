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

.z6yi8rp5l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.za0sm5ncu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h5v5h5v5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="za0sm5ncu"/><path class="z6yi8rp5l"/><path class="v8t37dedd"/><path class="gg6jr8oaf"/></g>`,
		"fallback": "iconmind:step-limit-duotone-thin",
	});
}

export default Component;
