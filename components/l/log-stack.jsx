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

.rs6uchb6o {
  d: path("M4 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.z9ywplblf {
  d: path("M8 8.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0 7h.01m7.99 0h.01M12 8.5h.01");
}
</style><g class="hntgybcog"><path class="rs6uchb6o"/><path class="z9ywplblf"/></g>`,
		"fallback": "uix:log-stack",
	});
}

export default Component;
