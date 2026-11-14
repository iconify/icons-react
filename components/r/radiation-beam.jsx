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
		"content": `<style>.z5f-20b9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16V7H4ZM9.5 7h5v2h-5Zm1 2l-1.75 5.75M13.5 9l1.75 5.75M12 15v4.5m-2.25-2.25h4.5M3 21.5h18");
}
</style><path class="z5f-20b9y"/>`,
		"fallback": "uix-sharp:radiation-beam",
	});
}

export default Component;
