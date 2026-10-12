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
		"content": `<style>.f3i3c25ua {
  d: path("M7.25 2.75h7.5l4.5 4.5v11.5a2.5 2.5 0 0 1-2.5 2.5h-9.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q-6vi9ylw {
  d: path("M14.75 2.75v3a1.5 1.5 0 0 0 1.5 1.5h3M7.75 8h5.5m-5.5 3.75h2.75m-2.75 3h2.75m-2.75 3h2.75m3-6h2.75m-2.75 3h2.75m-2.75 3h2.75");
}
</style><g class="hntgybcog"><path class="f3i3c25ua"/><path class="q-6vi9ylw"/></g>`,
		"fallback": "iconoven:research-paper",
	});
}

export default Component;
