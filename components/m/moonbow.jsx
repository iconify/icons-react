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
		"content": `<style>.d4g-ao8mc {
  d: path("M10.5 20.5a2.5 2.5 0 0 1 5 0M8 3a3.5 3.5 0 1 0 .5 5A3 3 0 0 1 8 3");
}

.deet60mic {
  d: path("M7.5 20.5a5.5 5.5 0 0 1 11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s2mbn-b7e {
  d: path("M4.5 20.5a8.5 8.5 0 0 1 17 0");
}
</style><g class="hntgybcog"><path class="s2mbn-b7e"/><path class="deet60mic"/><path class="d4g-ao8mc"/></g>`,
		"fallback": "uix:moonbow",
	});
}

export default Component;
