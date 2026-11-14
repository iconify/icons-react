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
		"content": `<style>.jm_5urj8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 20.5C6 17 8.75 15 12 15c.546 0 1.077.056 1.584.167M2.5 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm14.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-14.5 8c0-2 1.25-3.25 4-3.25m11 0c1.989 0 3.193.654 3.707 1.772M14.75 18l2 2L21 15.75");
}
</style><path class="jm_5urj8r"/>`,
		"fallback": "uix-sharp:multisig-approve",
	});
}

export default Component;
