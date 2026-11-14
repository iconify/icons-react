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
		"content": `<style>.ygiew5ggo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v7h-8Zm4 7v3m-2 0h4m7-9h4a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-.25L17.5 8.75l-1.75 1.75h-.25a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm-10 14.5h13M8 16l-2.5 2.5L8 21m8-5l2.5 2.5L16 21");
}
</style><path class="ygiew5ggo"/>`,
		"fallback": "uix-sharp:pc-vr-link",
	});
}

export default Component;
