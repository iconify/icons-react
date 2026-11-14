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

.t0jmh85vj {
  d: path("M10.5 8.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 12l-8.5 8.5m2.25-2.25l2 2m.5-4.5l1.5 1.5");
}

.uda-02tog {
  d: path("M14 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="t0jmh85vj"/><path class="uda-02tog"/></g>`,
		"fallback": "uix:pin-locksmith",
	});
}

export default Component;
