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

.pyp7xmbpk {
  d: path("M8.25 4.75h13l-5.5 12.75a1.63 1.63 0 0 1-3.25 0a1.63 1.63 0 0 1-3.25 0a1.63 1.63 0 0 1-3.25 0a1.63 1.63 0 0 1-3.25 0Z");
}

.rvl38lbbw {
  d: path("M5.55 11h2.3a1.4 1.4 0 0 0 2.8 0a1.4 1.4 0 0 0 2.8 0a1.4 1.4 0 0 0 2.8 0h2.3");
}
</style><g class="hntgybcog"><path class="pyp7xmbpk"/><path class="rvl38lbbw"/></g>`,
		"fallback": "iconoven:roof-tiles",
	});
}

export default Component;
