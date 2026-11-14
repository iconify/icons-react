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
		"content": `<style>.xgkm37b9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 8v8.5a4.5 4.5 0 0 1-9 0V6a3 3 0 0 1 6 0v9a1.5 1.5 0 0 1-3 0V8.5");
}
</style><path class="xgkm37b9c"/>`,
		"fallback": "uix-sharp:paper-clip",
	});
}

export default Component;
