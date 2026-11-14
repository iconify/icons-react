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
		"content": `<style>.syqk2ehya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.75h4.25v6.5H2.5Zm7-1.5h5v8h-5Zm7.75 1.5h4.25v6.5h-4.25ZM2.5 15.25h19v4.5h-19Zm9.5-3v3");
}
</style><path class="syqk2ehya"/>`,
		"fallback": "uix-sharp:mission-control",
	});
}

export default Component;
