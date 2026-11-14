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
		"content": `<style>.l6ux0ccgi {
  d: path("M4 7h14v10H4Zm14 3v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_jv31vjr {
  d: path("M10 8.5L8 12h4l-2 3.5");
}
</style><g class="ulnmmdpxh"><path class="l6ux0ccgi"/><path class="v_jv31vjr"/></g>`,
		"fallback": "uix-sharp:lithium-battery-shipping",
	});
}

export default Component;
