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

.l76l-6b7v {
  d: path("m8 12.75l4 4l4-4");
}

.tyev_0jvj {
  d: path("M12 2.5A9.5 9.5 0 1 1 2.5 12m.75-3.75h.01m1.99-3h.01m2.99-2h.01M12 7v9.5");
}
</style><g class="hntgybcog"><path class="tyev_0jvj"/><path class="l76l-6b7v"/></g>`,
		"fallback": "uix:lazy-load",
	});
}

export default Component;
