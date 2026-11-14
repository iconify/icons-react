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
		"content": `<style>.jx6mx5e6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.914 4.257l2.829 2.829l-5.657 5.657l-2.829-2.829ZM13 11l-8 8");
}
</style><path class="jx6mx5e6x"/>`,
		"fallback": "uix-sharp:swab-test",
	});
}

export default Component;
