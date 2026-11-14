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
		"content": `<style>.g1sl2xbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V19Q7 18 11 14.5v6Zm9.758-10.37l8.458-3.079l1.026 2.819l-8.458 3.079ZM4 13q3.5-7.5 9.5-7.5");
}
</style><path class="g1sl2xbxf"/>`,
		"fallback": "uix-sharp:snowboarder-jump",
	});
}

export default Component;
