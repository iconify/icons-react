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
		"content": `<style>.thbu-sb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11l-1 13H14L13 10h-2l-1 7.5H7.5ZM12 10v11.5m-3.5 0h7m-9-14h11");
}
</style><path class="thbu-sb7h"/>`,
		"fallback": "uix:mannequin-legs",
	});
}

export default Component;
