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
		"content": `<style>.exo870qhz {
  d: path("M15 11h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0msdy1bm {
  d: path("M5 11h4");
}

.mxbfiu5nj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7c-2 -2 -6 -3 -9 -2v14c3 -1 7 0 9 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t-0jg7bvk {
  d: path("M12 7c-2 -2 -6 -3 -9 -2v14c3 -1 7 0 9 2");
}

.t8weryp5p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7c2 -2 6 -3 9 -2v14c-3 -1 -7 0 -9 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x4kxwubfs {
  d: path("M12 7c2 -2 6 -3 9 -2v14c-3 -1 -7 0 -9 2");
}

.xac31kual {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 11h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z_0m8vo0q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 11h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="mxbfiu5nj"/><path class="t8weryp5p"/><path class="xac31kual"/><path class="z_0m8vo0q"/><path class="t-0jg7bvk"/><path class="x4kxwubfs"/><path class="m0msdy1bm"/><path class="exo870qhz"/></g>`,
		"fallback": "iconmind:reading-duotone-thin",
	});
}

export default Component;
