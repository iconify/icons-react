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
		"content": `<style>.a605-zbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 4h11.75A2.625 2.625 0 0 1 20.5 6.625v11.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875V6.625A2.625 2.625 0 0 1 6.125 4M3.5 8h17M7 12h10M7 14.5h10M7 17h10");
}
</style><path class="a605-zbzq"/>`,
		"fallback": "uix:self-storage-unit",
	});
}

export default Component;
