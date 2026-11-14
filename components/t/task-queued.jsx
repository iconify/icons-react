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
		"content": `<style>.lxihpzb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.313 3.258l5.602 3.234a2.63 2.63 0 0 1 1.312 2.274v6.468a2.63 2.63 0 0 1-1.312 2.274l-5.602 3.234a2.63 2.63 0 0 1-2.625 0l-5.603-3.234a2.63 2.63 0 0 1-1.312-2.274V8.766a2.63 2.63 0 0 1 1.312-2.274l5.603-3.234a2.63 2.63 0 0 1 2.625 0M8.5 12h.01M12 12h.01m3.49 0h.01");
}
</style><path class="lxihpzb4m"/>`,
		"fallback": "uix:task-queued",
	});
}

export default Component;
