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
		"content": `<style>.mt68z8-bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18 2.5l-5 10m-5 0h9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 14A1.5 1.5 0 0 1 8 12.5M8 16l-.75 4.5M11 16l-.25 5M14 16l.25 5M17 16l.75 4.5M3.5 17h.01");
}
</style><path class="mt68z8-bt"/>`,
		"fallback": "uix:mopping",
	});
}

export default Component;
