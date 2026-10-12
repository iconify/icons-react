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
		"content": `<style>.pjn7dxd6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11h5.5q1 0 1.71.71l.58.58q.71.71 1.67.42l4.58-1.42q.96-.29.33.48l-3.24 3.96q-.63.77-.63 1.77v.25q0 1-1 1H6q-1 0-1-1V12q0-1 1-1m2.75 0V8.75m-2 0h4M5 13H3.5a.75.75 0 0 0-.75.75V16a.75.75 0 0 0 .75.75H5m15-1c.8 1 1.25 1.75 1.25 2.5a1.25 1.25 0 0 1-2.5 0c0-.75.45-1.5 1.25-2.5");
}
</style><path class="pjn7dxd6n"/>`,
		"fallback": "iconoven:oil-can-car",
	});
}

export default Component;
