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
		"content": `<style>.kkjxmccaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm13.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-6.75 13.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM8 5.25h5.25m-2-2l2 2l-2 2m6.25.5l-3 6m2-.75l-2 .75l-.75-2");
}
</style><path class="kkjxmccaq"/>`,
		"fallback": "uix-sharp:state-machine",
	});
}

export default Component;
