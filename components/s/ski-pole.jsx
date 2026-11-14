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
		"content": `<style>.cygmszqvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5v14m-1.5-19h3v5h-3ZM9.5 18h5m-4-13C8 6 7.5 9 9 10.5");
}
</style><path class="cygmszqvj"/>`,
		"fallback": "uix-sharp:ski-pole",
	});
}

export default Component;
