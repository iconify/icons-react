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
		"content": `<style>.hus8yektw {
  d: path("M19.5 20.5a13 13 0 0 0-13-13h-2");
}

.jl-908brv {
  d: path("M8 4L4.5 7.5L8 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hus8yektw"/><path class="jl-908brv"/></g>`,
		"fallback": "uix-sharp:rotate-left",
	});
}

export default Component;
