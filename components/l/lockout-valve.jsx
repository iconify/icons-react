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
		"content": `<style>.nnb55sb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm5 5v4.5m-6 0H12M8.5 5v6m-3-3h6m3.5 9.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="nnb55sb5f"/>`,
		"fallback": "uix-sharp:lockout-valve",
	});
}

export default Component;
