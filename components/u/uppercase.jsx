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
		"content": `<style>.boqa9mkbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L6.75 5L11 19m-7-4.5h5.5M14 5h3a3.25 3.25 0 0 1 0 6.5h.5a3.75 3.75 0 0 1 0 7.5H14Zm0 6.5h3");
}
</style><path class="boqa9mkbc"/>`,
		"fallback": "uix-sharp:uppercase",
	});
}

export default Component;
