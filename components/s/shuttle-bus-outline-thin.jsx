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
		"content": `<style>.crgm97xoy {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.htavkzbpk {
  d: path("m17 18 2 2 -2 2");
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.ui32hib9b {
  d: path("M5 20h14");
}

.wtfq6b2ta {
  d: path("M14 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.x4bmljlar {
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="crgm97xoy"/><path class="k4qo1xe9v"/><path class="x4bmljlar"/><path class="wtfq6b2ta"/><path class="ui32hib9b"/><path class="htavkzbpk"/></g>`,
		"fallback": "iconmind:shuttle-bus-outline-thin",
	});
}

export default Component;
