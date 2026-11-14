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
		"content": `<style>.zvoaowzgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H5v10H2.5ZM5 5.5l16 7M7.75 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM3.75 13v8.5");
}
</style><path class="zvoaowzgg"/>`,
		"fallback": "uix-sharp:waterfall-arm",
	});
}

export default Component;
