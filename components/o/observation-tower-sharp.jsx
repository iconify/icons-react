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
		"content": `<style>.f5a-zt76p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.6 5.5H17l.54.25l2.17 1l.54.25l-.58.17l-3.09.91l-.58.17H8l-.58-.17l-3.09-.91L3.75 7l.54-.25l2.17-1L7 5.5zm1.9 2.75c1 4.25 1 8.25-2.5 13m7.5-13c-1 4.25-1 8.25 2.5 13M12 5.5V2.75");
}
</style><path class="f5a-zt76p"/>`,
		"fallback": "iconoven:observation-tower-sharp",
	});
}

export default Component;
