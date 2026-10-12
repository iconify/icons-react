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
		"content": `<style>.szhr38b3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.75h18.5v3.5H2.75zm2.75 0v-3.5m0 0l11-1.75M13 16.75v-2.5m2.75-6h5.5v3.5h-5.5z");
}
</style><path class="szhr38b3j"/>`,
		"fallback": "iconoven:telegraph-key-sharp",
	});
}

export default Component;
