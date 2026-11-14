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
		"content": `<style>.c-fnn3spk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5h6V8c0 1.5-1.5 3-3 4c1.5 1 3 2.5 3 4v1.5H9V16c0-1.5 1.5-3 3-4c-1.5-1-3-2.5-3-4Zm-1.25 0h8.5m-8.5 11h8.5m.625-13.944a9.75 9.75 0 0 1 0 16.888m-9.75 0a9.75 9.75 0 0 1 0-16.888");
}
</style><path class="c-fnn3spk"/>`,
		"fallback": "uix-sharp:loading-hourglass",
	});
}

export default Component;
