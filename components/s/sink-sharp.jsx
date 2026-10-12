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
		"content": `<style>.icei3yjcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6Zm9.25 6v3.5m-2.25-9.5V6a2.25 2.25 0 0 1 4.5 0v.75");
}
</style><path class="icei3yjcv"/>`,
		"fallback": "iconoven:sink-sharp",
	});
}

export default Component;
