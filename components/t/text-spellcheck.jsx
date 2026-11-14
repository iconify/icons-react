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
		"content": `<style>.s_2q3cbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14L7.5 3.5L12 14m-7.25-4h5.5m.75 7.5l3 3l7-7");
}
</style><path class="s_2q3cbkz"/>`,
		"fallback": "uix:text-spellcheck",
	});
}

export default Component;
