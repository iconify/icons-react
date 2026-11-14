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
		"content": `<style>.td2041mkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5a5.5 5.5 0 0 1 11 0m-13 0h15A1.5 1.5 0 0 1 21 11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 11a1.5 1.5 0 0 1 1.5-1.5m0 3l1.5 8h12l1.5-8m-14.25 4h13.5");
}
</style><path class="td2041mkn"/>`,
		"fallback": "uix:picnic-blanket",
	});
}

export default Component;
