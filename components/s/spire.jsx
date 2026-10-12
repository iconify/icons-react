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
		"content": `<style>.akmmmz6xk {
  d: path("M8 20.65v-8.3q0-.6.24-1.15l3.52-7.9q.24-.55.48 0l3.52 7.9q.24.55.24 1.15v8.3q0 .6-.6.6H8.6q-.6 0-.6-.6M10.5 8.5h3M8 12.75h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0ml346ab {
  d: path("M10.5 19.25V17a1.5 1.5 0 0 1 3 0v2.25");
}
</style><g class="hntgybcog"><path class="akmmmz6xk"/><path class="q0ml346ab"/></g>`,
		"fallback": "iconoven:spire",
	});
}

export default Component;
