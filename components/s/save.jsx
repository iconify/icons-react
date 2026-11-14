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
		"content": `<style>.ja270jcoj {
  d: path("M4 4h12.5L20 7.5V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdutghbid {
  d: path("M7.5 20v-5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5M8 4v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4");
}
</style><g class="ulnmmdpxh"><path class="ja270jcoj"/><path class="zdutghbid"/></g>`,
		"fallback": "uix-sharp:save",
	});
}

export default Component;
