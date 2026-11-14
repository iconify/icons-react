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
		"content": `<style>.qlwjj4jxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6v14.5m-4 0h8M4.5 8h15m-17 6h5a2.5 2.5 0 0 1-5 0Zm.5-.5L4.5 8L6 13.5m10.5.5h5a2.5 2.5 0 0 1-5 0Zm.5-.5L18.5 8l1.5 5.5M12.5 2l-2 2.5h1.25l-.25 1l2-2h-1.25Z");
}
</style><path class="qlwjj4jxn"/>`,
		"fallback": "uix-sharp:load-balancing",
	});
}

export default Component;
