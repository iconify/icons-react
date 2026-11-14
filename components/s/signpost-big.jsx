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
		"content": `<style>.i1stwjskw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h12l3 2.25l-3 2.25h-12Zm13 7.5h-12l-3 2.25l3 2.25h12ZM12 8v3m0 4.5v6");
}
</style><path class="i1stwjskw"/>`,
		"fallback": "uix:signpost-big",
	});
}

export default Component;
