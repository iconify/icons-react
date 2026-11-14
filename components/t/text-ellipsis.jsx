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
		"content": `<style>.cynb4wobm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19M2.5 12h19m-19 5.5h7m3.25 0h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="cynb4wobm"/>`,
		"fallback": "uix-sharp:text-ellipsis",
	});
}

export default Component;
