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
		"content": `<style>.t3b4-6bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v4.5h-19Zm7.25 4.5v10.75a2.25 2.25 0 0 0 4.5 0V8.5m-9.75 0v1a2 2 0 0 0 2 2H7");
}
</style><path class="t3b4-6bpq"/>`,
		"fallback": "uix-sharp:timeout-signal",
	});
}

export default Component;
