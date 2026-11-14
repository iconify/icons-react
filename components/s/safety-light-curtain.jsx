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
		"content": `<style>.paut2puby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h3.5v19H3Zm14.5 0H21v19h-3.5ZM9.25 7h5.5m-5.5 5h5.5m-5.5 5h5.5");
}
</style><path class="paut2puby"/>`,
		"fallback": "uix-sharp:safety-light-curtain",
	});
}

export default Component;
