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

.ou-zgf33e {
  d: path("m7 7.25l7 3.5l7-3.5m-7 3.5v9.5M3.75 7v10m-1-8.75l1-1.25l1 1.25m-2 7.5l1 1.25l1-1.25");
}

.yr5_4pbgz {
  d: path("M13.38 3.6a1.5 1.5 0 0 1 1.24 0l5.9 2.95a1.25 1.25 0 0 1 .73 1.13v8.64a1.25 1.25 0 0 1-.73 1.13l-5.9 2.95a1.5 1.5 0 0 1-1.24 0l-5.9-2.95a1.25 1.25 0 0 1-.73-1.13V7.68a1.25 1.25 0 0 1 .73-1.13Z");
}
</style><g class="hntgybcog"><path class="yr5_4pbgz"/><path class="ou-zgf33e"/></g>`,
		"fallback": "iconoven:volume-cube",
	});
}

export default Component;
