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
		"content": `<style>.n1pyhi5nv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.75a4 3.5 0 1 0 8 0a4 3.5 0 1 0-8 0M6.245 6.521l-.885-.619A1.5 1.5 0 0 0 3 7.131v1.238a1.5 1.5 0 0 0 2.36 1.229l.885-.619a1.5 1.5 0 0 0 0-2.458m11.51 0l.885-.619A1.5 1.5 0 0 1 21 7.131v1.238a1.5 1.5 0 0 1-2.36 1.229l-.885-.619a1.5 1.5 0 0 1 0-2.458M16.5 15c-1.25 0-1.75 1-1.75 2.25s.75 1.75 1 2.75l.5 1.5l1.5-2l1.5 2l.5-1.5c.25-1 1-1.5 1-2.75S20.25 15 19 15c-.75 0-.75.5-1.25.5s-.5-.5-1.25-.5");
}
</style><path class="n1pyhi5nv"/>`,
		"fallback": "uix:tooth-candy",
	});
}

export default Component;
