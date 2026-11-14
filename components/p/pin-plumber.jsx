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
		"content": `<style>.ctu-_ogcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.338 18.187l8.132-8.132l2.475 2.475l-8.132 8.132Zm8.132-8.132l-.354-3.182l3.889-3.889l1.945 1.945l-2.122 2.121l2.122 2.122l2.121-2.122l1.945 1.945l-3.889 3.889l-3.182-.354Z");
}
</style><path class="ctu-_ogcq"/>`,
		"fallback": "uix-sharp:pin-plumber",
	});
}

export default Component;
