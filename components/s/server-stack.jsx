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
		"content": `<style>.agva2667y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18V7H3Zm0 7.25h18v4.5H3ZM3 17h18v4.5H3ZM6.5 4.75h.01M6.5 12h.01m-.01 7.25h.01");
}
</style><path class="agva2667y"/>`,
		"fallback": "uix-sharp:server-stack",
	});
}

export default Component;
