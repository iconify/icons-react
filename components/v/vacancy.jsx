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
		"content": `<style>.f4j5zvbjz {
  d: path("M6 3h12m-6 0v3.5a1.25 1.25 0 0 1-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhku4yb2s {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v9m0-4h2.5M12 21h2.5");
}
</style><g class="hntgybcog"><path class="f4j5zvbjz"/><path class="yhku4yb2s"/></g>`,
		"fallback": "uix:vacancy",
	});
}

export default Component;
