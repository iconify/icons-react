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
		"content": `<style>.un4cafd_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 5H7a3.5 3.5 0 0 0-3.5 3.5v7A3.5 3.5 0 0 0 7 19h14ZM9 5v14m3-9.25h9m-9 4.5h9M6.25 12h.01");
}
</style><path class="un4cafd_q"/>`,
		"fallback": "uix-sharp:perfect-binding",
	});
}

export default Component;
