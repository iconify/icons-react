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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.gxuyb-5uv {
  d: path("m19 17 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oz0nhtbip {
  d: path("m14 17 -3 3");
}

.rm204cchw {
  d: path("m9 17 -3 3");
}
</style><g class="hntgybcog"><path class="c-pcdbceg"/><path class="rm204cchw"/><path class="oz0nhtbip"/><path class="gxuyb-5uv"/></g>`,
		"fallback": "iconmind:monsoon-outline-thin",
	});
}

export default Component;
