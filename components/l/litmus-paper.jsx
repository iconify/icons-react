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

.ndadbzbam {
  d: path("M9.5 4.25a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v8.5h-5Zm0 8.5h5v3a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5Z");
}

.venzy0rbi {
  d: path("M4.5 11.25v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8");
}
</style><g class="hntgybcog"><path class="ndadbzbam"/><path class="venzy0rbi"/></g>`,
		"fallback": "iconoven:litmus-paper",
	});
}

export default Component;
