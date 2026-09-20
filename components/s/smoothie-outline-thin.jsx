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

.kgr6yibsx {
  d: path("M8 8v12h8V8");
}

.kurig99-x {
  d: path("m14 6 4 -4");
}

.qu18jzmnr {
  d: path("M8 8a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="kgr6yibsx"/><path class="qu18jzmnr"/><path class="kurig99-x"/></g>`,
		"fallback": "iconmind:smoothie-outline-thin",
	});
}

export default Component;
