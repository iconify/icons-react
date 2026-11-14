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
		"content": `<style>.hy9hbrepi {
  fill: currentColor;
  d: path("M10.25 16.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.lxtrpw00t {
  d: path("M10.25 5.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoil44bck {
  d: path("M7.25 2h9.5v18h-9.5ZM12 20v2");
}
</style><g class="ulnmmdpxh"><path class="xoil44bck"/><path class="lxtrpw00t"/><path class="hy9hbrepi"/></g>`,
		"fallback": "uix-sharp:traffic-light-green",
	});
}

export default Component;
