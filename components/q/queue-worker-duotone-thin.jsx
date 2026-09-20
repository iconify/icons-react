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
		"content": `<style>.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oibtokbpn {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r46fmvbqs {
  d: path("M7 16.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.spper1bzy {
  d: path("M9 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.st827tz7s {
  fill: currentColor;
  d: path("M9 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tl2fjsrpp {
  d: path("m9.5 9 2.5 2.5L14.5 9");
}

.zxcvvufzw {
  fill: currentColor;
  d: path("M7 16.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zxrob3sge {
  fill: currentColor;
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zxrob3sge"/><path class="st827tz7s"/><path class="oibtokbpn"/><path class="zxcvvufzw"/><path class="dfcdzc65k"/><path class="spper1bzy"/><path class="fevuzkbbx"/><path class="tl2fjsrpp"/><path class="r46fmvbqs"/></g>`,
		"fallback": "iconmind:queue-worker-duotone-thin",
	});
}

export default Component;
