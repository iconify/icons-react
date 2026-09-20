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
		"content": `<style>.bgd-y5boh {
  d: path("M11 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ephqv81ta {
  d: path("m9.5 14 2.5 2.5 2.5 -2.5");
}

.gebgl2bpy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
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

.kjacm7b9e {
  fill: currentColor;
  d: path("M11 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r182r524c {
  d: path("M7 9h10");
}

.wmpj7cbtn {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="gebgl2bpy"/><path class="kjacm7b9e"/><path class="wmpj7cbtn"/><path class="r182r524c"/><path class="ephqv81ta"/><path class="bgd-y5boh"/></g>`,
		"fallback": "iconmind:tooltip-duotone-thin",
	});
}

export default Component;
