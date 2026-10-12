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
		"content": `<style>.w33ywfbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 7h13.5v10H5.25zM9.5 7v10m5-10v10M2.75 10h2.5m13.5 4h2.5");
}
</style><path class="w33ywfbzz"/>`,
		"fallback": "iconoven:muffler-sharp",
	});
}

export default Component;
