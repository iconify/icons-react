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
		"content": `<style>.crzn5obfu {
  fill: currentColor;
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jx89umbuc {
  d: path("M9.5 8.5 7 11l2.5 2.5");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}

.zr0lwnjnt {
  d: path("M14.5 8.5 17 11l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="crzn5obfu"/><path class="ymp2b4b6u"/><path class="jx89umbuc"/><path class="zr0lwnjnt"/></g>`,
		"fallback": "iconmind:output-encoding-duotone-thin",
	});
}

export default Component;
