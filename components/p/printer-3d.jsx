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
		"content": `<style>.ksc3ng0gk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M9 4h6v2l-3 3l-3-3Zm-1 7.75h8v8.75H8ZM3 20.5h18");
}
</style><path class="ksc3ng0gk"/>`,
		"fallback": "uix-sharp:printer-3d",
	});
}

export default Component;
