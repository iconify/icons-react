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
		"content": `<style>.fim5wvb3d {
  d: path("M5.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhhiiffss {
  d: path("M16.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mdqmuqzrh {
  d: path("M3 8v8h7V8Z");
}

.rp7ii8bgy {
  d: path("M14 8v8h7V8Z");
}
</style><g class="hntgybcog"><path class="mdqmuqzrh"/><path class="rp7ii8bgy"/><path class="fim5wvb3d"/><path class="lhhiiffss"/></g>`,
		"fallback": "iconmind:multiplayer-outline-thin",
	});
}

export default Component;
