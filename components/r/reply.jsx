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
		"content": `<style>.fmeosdblm {
  d: path("m9.25 5.25l-5.5 5.5l5.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kspidacpp {
  d: path("M3.75 10.75h9.5a7 7 0 0 1 7 7v1");
}
</style><g class="hntgybcog"><path class="fmeosdblm"/><path class="kspidacpp"/></g>`,
		"fallback": "iconoven:reply",
	});
}

export default Component;
