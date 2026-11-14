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
		"content": `<style>.ejeffcbad {
  d: path("m15 2l-3 3l3 3m-3 11A7 7 0 0 1 7.05 7.05");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0opjt0wt {
  d: path("M12 5a7 7 0 0 1 4.95 11.95");
}

.o15xtpbea {
  d: path("m9 16l3 3l-3 3m.75-10l1.5 1.5l3-3");
}
</style><g class="hntgybcog"><path class="m0opjt0wt"/><path class="ejeffcbad"/><path class="o15xtpbea"/></g>`,
		"fallback": "uix:sync-check",
	});
}

export default Component;
