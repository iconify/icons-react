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
		"content": `<style>.rlo-6goqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V8h-19Zm2 5.5v13.5M19.5 8v13.5m-17 0h19m-17-11h15M7 5.25h10");
}
</style><path class="rlo-6goqk"/>`,
		"fallback": "uix-sharp:roller-shutter-open",
	});
}

export default Component;
