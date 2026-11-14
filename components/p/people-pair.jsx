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
		"content": `<style>.i_8hvx37z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm10 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 19.5c0-3.25 2-5.5 4.5-5.5s4.25 1.5 5 2.25c.75-.75 2.5-2.25 5-2.25s4.5 2.25 4.5 5.5");
}
</style><path class="i_8hvx37z"/>`,
		"fallback": "uix-sharp:people-pair",
	});
}

export default Component;
