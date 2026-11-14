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
		"content": `<style>.gxi98dbew {
  d: path("M3 7.5h11.5v14H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxlzlqbfb {
  d: path("m7 11.5l4 3l-4 3ZM18.25 2q0 3.5 3.5 3.5q-3.5 0-3.5 3.5q0-3.5-3.5-3.5q3.5 0 3.5-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="gxi98dbew"/><path class="uxlzlqbfb"/></g>`,
		"fallback": "uix-sharp:short-video-effects",
	});
}

export default Component;
