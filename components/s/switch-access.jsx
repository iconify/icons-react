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
		"content": `<style>.c3-6o8b5t {
  d: path("M2.75 14a9.25 4 0 0 0 18.5 0M12 2.75v6.5m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.f0z242bas {
  d: path("M2.75 14a9.25 4 0 0 1 18.5 0v3.25a9.25 4 0 0 1-18.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f0z242bas"/><path class="c3-6o8b5t"/></g>`,
		"fallback": "iconoven:switch-access",
	});
}

export default Component;
