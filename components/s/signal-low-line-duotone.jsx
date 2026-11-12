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
		"content": `<style>.a2aqw9y_p {
  d: path("M3 20H3.0001");
}

.a3xe23f8n {
  d: path("M7.5 20V16");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a2aqw9y_p"/><path class="a3xe23f8n"/></g>`,
		"fallback": "solar:signal-low-line-duotone",
	});
}

export default Component;
