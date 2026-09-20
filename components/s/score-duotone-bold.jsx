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
		"content": `<style>.b2998ks9l {
  d: path("m10 11 2 -2v7");
}

.cjm330b0r {
  fill: currentColor;
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n-7xnfbas {
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="cjm330b0r"/><path class="n-7xnfbas"/><path class="b2998ks9l"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:score-duotone-bold",
	});
}

export default Component;
