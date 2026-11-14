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
		"content": `<style>.yjz0n9hbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5H8V15h5.5V9.5h8M4 15L16.5 2.5M5.25 13.75v6.75m10.5-17.25V9.5");
}
</style><path class="yjz0n9hbg"/>`,
		"fallback": "uix-sharp:stair-handrail",
	});
}

export default Component;
