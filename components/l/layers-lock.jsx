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
		"content": `<style>.gjl-cqbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l9 5l-9 5l-9-5Zm-9 9l9 5m-9-1l9 5m3-4h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}
</style><path class="gjl-cqbgg"/>`,
		"fallback": "uix-sharp:layers-lock",
	});
}

export default Component;
