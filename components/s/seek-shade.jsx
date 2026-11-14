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
		"content": `<style>.jx4kchqet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a9 8 0 0 1 18 0q-3-1.5-6 0q-3-1.5-6 0q-3-1.5-6 0m9-.75V19m-6 1a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0");
}
</style><path class="jx4kchqet"/>`,
		"fallback": "uix:seek-shade",
	});
}

export default Component;
