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
		"content": `<style>.eg9e_xbkj {
  d: path("m2.5 7l8.5 6l2.429-1.754M14.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm0 0h7.5");
}

.ne34zgklx {
  d: path("M21.5 12v7.5h-19v-14h8.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjt_vebdt {
  d: path("M18 2.75c-1.75 1.75-1.75 5.75 0 7.5");
}
</style><g class="ulnmmdpxh"><path class="ne34zgklx"/><path class="eg9e_xbkj"/><path class="vjt_vebdt"/></g>`,
		"fallback": "uix-sharp:treasury-swift-message",
	});
}

export default Component;
