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
		"content": `<style>.vtugansbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H7V6c0-2 1-3 2.5-3c1 0 1.5.5 2.5.5s1.5-.5 2.5-.5C16 3 17 4 17 6v4h4.5M7 10l2.75 9.5c.5 2 4 2 4.5 0L17 10m-5-3.5v10");
}
</style><path class="vtugansbk"/>`,
		"fallback": "uix-sharp:tooth-post",
	});
}

export default Component;
