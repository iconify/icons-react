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
		"content": `<style>.lbz5bdbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.25V6.5h5V8h3V6.5h5v14.75Zm3-12l7 9.5m0-9.5l-7 9.5");
}
</style><path class="lbz5bdbyj"/>`,
		"fallback": "iconoven:safety-harness-sharp",
	});
}

export default Component;
