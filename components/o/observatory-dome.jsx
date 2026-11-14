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
		"content": `<style>.pt0m3h17d {
  d: path("M10 16.5h4v5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vynwjw15e {
  d: path("M5 13a7 7 0 0 1 14 0M4 13h16v8.5H4Zm9-3l5.5-6");
}
</style><g class="ulnmmdpxh"><path class="vynwjw15e"/><path class="pt0m3h17d"/></g>`,
		"fallback": "uix-sharp:observatory-dome",
	});
}

export default Component;
