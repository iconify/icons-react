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
		"content": `<style>.yfm20vxkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h18.5v9.25H2.75zM12 3v4.5m-7.5-3L12 12m0 0l2.25 6.25");
}
</style><path class="yfm20vxkh"/>`,
		"fallback": "iconoven:light-refraction-sharp",
	});
}

export default Component;
