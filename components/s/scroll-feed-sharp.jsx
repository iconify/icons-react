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
		"content": `<style>.u4yyclh3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75H15.5v8H2.75zm0 10.5H15.5v8H2.75zm16.5-9.75v14.25m-2-2l2 2l2-2");
}
</style><path class="u4yyclh3j"/>`,
		"fallback": "iconoven:scroll-feed-sharp",
	});
}

export default Component;
