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
		"content": `<style>.pfs1g7m8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 9c0-2 1-3 2-2.5q.75.375 1.5 0c1-.5 2 .5 2 2.5s-.5 3.5-.75 5l-.25 3.5c-.25 1-1 1-1.25 0l-.5-2l-.5 2c-.25 1-1 1-1.25 0L3 14c-.25-1.5-.75-3-.75-5m7 0c0-2 1-3 2-2.5q.75.375 1.5 0c1-.5 2 .5 2 2.5s-.5 3.5-.75 5l-.25 3.5c-.25 1-1 1-1.25 0l-.5-2l-.5 2c-.25 1-1 1-1.25 0L10 14c-.25-1.5-.75-3-.75-5m7 0c0-2 1-3 2-2.5q.75.375 1.5 0c1-.5 2 .5 2 2.5s-.5 3.5-.75 5l-.25 3.5c-.25 1-1 1-1.25 0l-.5-2l-.5 2c-.25 1-1 1-1.25 0L17 14c-.25-1.5-.75-3-.75-5");
}
</style><path class="pfs1g7m8u"/>`,
		"fallback": "uix:teeth",
	});
}

export default Component;
