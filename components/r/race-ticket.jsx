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
		"content": `<style>.jfyglrz3p {
  fill: currentColor;
  d: path("M4.5 5h3v3.5h-3Zm6 0h3v3.5h-3Zm6 0h3v3.5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyb7axbxh {
  d: path("M4.5 5h15a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2Zm-2 3.5h19");
}
</style><g class="ulnmmdpxh"><path class="yyb7axbxh"/><path class="jfyglrz3p"/></g>`,
		"fallback": "uix-sharp:race-ticket",
	});
}

export default Component;
