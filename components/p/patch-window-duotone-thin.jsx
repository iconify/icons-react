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

.mg_lwq87g {
  d: path("M10.5 11h3");
}

.n4fl2qbbh {
  d: path("M13.5 8H16v6h-2.5");
}

.nlzvizopl {
  d: path("M10.5 8H8v6h2.5");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="hntgybcog"><path class="crzn5obfu"/><path class="ymp2b4b6u"/><path class="nlzvizopl"/><path class="n4fl2qbbh"/><path class="mg_lwq87g"/></g>`,
		"fallback": "iconmind:patch-window-duotone-thin",
	});
}

export default Component;
