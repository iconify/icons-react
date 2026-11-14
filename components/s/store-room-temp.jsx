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
		"content": `<style>.gzclc5-5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h9V6h-9Zm9.8 19H3.5V6h11v9.5M9 11v5.5m-2.5-2.75h5m6 2.75v-2.25a1.25 1.25 0 0 1 2.5 0v2.25a2.5 2.5 0 1 1-2.5 0Z");
}
</style><path class="gzclc5-5f"/>`,
		"fallback": "uix-sharp:store-room-temp",
	});
}

export default Component;
