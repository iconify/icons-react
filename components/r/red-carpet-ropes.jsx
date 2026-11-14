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
		"content": `<style>.q1vgs-b_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4.5 6.75V20.5m-2 0h4M17.75 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 1.75V20.5m-2 0h4m-17-11q7.5 9 15 0");
}
</style><path class="q1vgs-b_q"/>`,
		"fallback": "uix-sharp:red-carpet-ropes",
	});
}

export default Component;
