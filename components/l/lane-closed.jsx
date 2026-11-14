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
		"content": `<style>.k9ek6r19u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11V12h-11Zm5.5 10V21m-4 0h8M10 5.25l4 4m0-4l-4 4");
}
</style><path class="k9ek6r19u"/>`,
		"fallback": "uix-sharp:lane-closed",
	});
}

export default Component;
