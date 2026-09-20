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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khp0b8bxr {
  d: path("M10.5 13h3");
}

.rp--5qbrh {
  d: path("M13 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.tk14kvbjb {
  d: path("m3 10 2 -2");
}

.z27xoybfi {
  d: path("m21 10 -2 -2");
}

.znn_tgx5z {
  d: path("M3 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="znn_tgx5z"/><path class="rp--5qbrh"/><path class="khp0b8bxr"/><path class="tk14kvbjb"/><path class="z27xoybfi"/></g>`,
		"fallback": "iconmind:reading-glasses-outline-thin",
	});
}

export default Component;
