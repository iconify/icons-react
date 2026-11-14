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
		"content": `<style>.gj2b9vg-m {
  fill: currentColor;
  d: path("M3 4h16a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5A.5.5 0 0 1 3 4m2 4.5h14.5a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5M7.5 13h8a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5m2.5 4.5h4a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x64w0obso {
  d: path("M12 2v20");
}
</style><g class="hntgybcog"><path class="x64w0obso"/><path class="gj2b9vg-m"/></g>`,
		"fallback": "uix:sensitivity-analysis",
	});
}

export default Component;
