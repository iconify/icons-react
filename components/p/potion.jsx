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
		"content": `<style>.i2d_stbss {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 11.25h.01");
}

.kkctscmvw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 14.75h6.5a3.25 3.25 0 0 1-6.5 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zlbof8bxa {
  width: 5.5px;
  height: 3px;
  x: 9.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.znccc6ije {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.75h4V8.5a6.25 6.25 0 1 1-4 0Z");
}
</style><g class="y9tr6bcfx"><rect class="zlbof8bxa"/><path class="znccc6ije"/><path class="kkctscmvw"/><path class="i2d_stbss"/></g>`,
		"fallback": "iconoven:potion",
	});
}

export default Component;
