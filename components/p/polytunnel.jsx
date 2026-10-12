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
		"content": `<style>.q12spu0qp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25v-6a8.5 8.5 0 0 1 8.5-8.5h1.5a8.5 8.5 0 0 1 8.5 8.5v6ZM7.5 8.5v12.75M12 6.75v14.5M16.5 8.5v12.75M12 6.75c0-2 1.25-3.25 3.25-4c0 2-1.25 3.25-3.25 4");
}
</style><path class="q12spu0qp"/>`,
		"fallback": "iconoven:polytunnel",
	});
}

export default Component;
