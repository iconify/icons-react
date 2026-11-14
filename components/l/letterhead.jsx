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
		"content": `<style>.fhl-zn69h {
  d: path("M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyugi7bci {
  d: path("M14 2.5V8h5.5M7.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m.25 4.5h9m-9 3.5h9m-9 3.5h5");
}
</style><g class="hntgybcog"><path class="fhl-zn69h"/><path class="kyugi7bci"/></g>`,
		"fallback": "uix:letterhead",
	});
}

export default Component;
