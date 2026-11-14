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
		"content": `<style>.gf6dikvgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 16h20M2.5 16l5-6.5h9l5 6.5m-11-3.75V16m3-3.75V16");
}
</style><path class="gf6dikvgx"/>`,
		"fallback": "uix:speed-table",
	});
}

export default Component;
