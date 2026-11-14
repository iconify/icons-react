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
		"content": `<style>.clfxc-bak {
  d: path("M5.5 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-11 4.25h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuheekb4r {
  d: path("M2.5 14V6.5A1.5 1.5 0 0 1 4 5h9c4.5 0 8.5 4 8.5 9ZM5 8.5h10");
}
</style><g class="hntgybcog"><path class="uuheekb4r"/><path class="clfxc-bak"/></g>`,
		"fallback": "uix:intercity-train",
	});
}

export default Component;
