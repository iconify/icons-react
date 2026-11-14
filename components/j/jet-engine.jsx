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

.ln_atzbju {
  d: path("M12 10.25C12 8 13.5 6.5 15 6.5M13.75 12c2.25 0 3.75 1.5 3.75 3M12 13.75c0 2.25-1.5 3.75-3 3.75m1.25-5.5C8 12 6.5 10.5 6.5 9");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.t08wuz0fb {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="t08wuz0fb"/><path class="ln_atzbju"/></g>`,
		"fallback": "uix:jet-engine",
	});
}

export default Component;
