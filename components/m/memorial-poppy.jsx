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
		"content": `<style>.jh0of207c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 5.75a2.75 2.75 0 0 1 0 5.5a2.75 2.75 0 0 1-5.5 0a2.75 2.75 0 0 1 0-5.5a2.75 2.75 0 0 1 5.5 0ZM12 14v7.5m0-2.5c2-3 5-3 6-2.5c-.5 2-3 3-6 2.5m0-10.5h.01");
}
</style><path class="jh0of207c"/>`,
		"fallback": "uix-sharp:memorial-poppy",
	});
}

export default Component;
