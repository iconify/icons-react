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
		"content": `<style>.u1xd00byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h8v8h-8zm4 0v8m-4-4h8M10 2.75h11.25V14m-8.5-2.75l5.5-5.5m-4.5 0h4.5v4.5");
}
</style><path class="u1xd00byb"/>`,
		"fallback": "iconoven:upscale-ai-sharp",
	});
}

export default Component;
