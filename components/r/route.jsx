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
		"content": `<style>.da5imtbyr {
  d: path("M8.5 18.5H15a3 3 0 0 0 0-6H9a3.5 3.5 0 0 1 0-7h6.5");
}

.f-rig3ukr {
  d: path("M3.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12-13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="da5imtbyr"/><path class="f-rig3ukr"/></g>`,
		"fallback": "uix:route",
	});
}

export default Component;
