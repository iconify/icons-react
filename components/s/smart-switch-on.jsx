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
		"content": `<style>.ew-6rkhav {
  d: path("M7.5 5.5h6V15h-6Zm0 3.25h6M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xklv2yp2t {
  d: path("M13.8 21H3V2.5h15v12.3");
}
</style><g class="ulnmmdpxh"><path class="xklv2yp2t"/><path class="ew-6rkhav"/></g>`,
		"fallback": "uix-sharp:smart-switch-on",
	});
}

export default Component;
