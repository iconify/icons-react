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
		"content": `<style>.cjm330b0r {
  fill: currentColor;
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
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

.n-7xnfbas {
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
}

.vtc00ob6f {
  d: path("m8 10 3 3 5 -5");
}
</style><g class="hntgybcog"><path class="cjm330b0r"/><path class="n-7xnfbas"/><path class="vtc00ob6f"/></g>`,
		"fallback": "iconmind:skill-badge-duotone-thin",
	});
}

export default Component;
