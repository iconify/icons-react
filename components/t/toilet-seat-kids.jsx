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
		"content": `<style>.fl0yknbmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h6v9H4Zm0 9h16c0 4-3 6-6 6.5l1 3H8L9 18c-3-1-5-3-5-6Zm8.5 0l.5-2.5h5.5l1 2.5");
}
</style><path class="fl0yknbmz"/>`,
		"fallback": "uix-sharp:toilet-seat-kids",
	});
}

export default Component;
