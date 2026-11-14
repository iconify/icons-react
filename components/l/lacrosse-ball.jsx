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
		"content": `<style>.qu_rpcbgp {
  d: path("M10 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ruyt_r40r {
  d: path("M8.5 13L6 6c-.5-2.5 1.5-3.5 4-3.5h4.5c3 0 4.5 2 3.5 4.5l-4.5 6Zm2.5 0l4 8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ruyt_r40r"/><path class="qu_rpcbgp"/></g>`,
		"fallback": "uix-sharp:lacrosse-ball",
	});
}

export default Component;
