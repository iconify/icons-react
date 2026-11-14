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

.j7e0p2chq {
  d: path("M3.5 21.5V13H9V9.5h6V13h5.5v8.5Z");
}

.vu-2ln_fl {
  d: path("M10.25 21.5v-4h3.5v4M12 6.75V2.5M9.5 5L12 2.5L14.5 5");
}
</style><g class="hntgybcog"><path class="j7e0p2chq"/><path class="vu-2ln_fl"/></g>`,
		"fallback": "uix:profit-center",
	});
}

export default Component;
