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
		"content": `<style>.acsvb5w5k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m5 16 6 -6h4l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g0w37q__a {
  d: path("m5 16 6 -6h4l4 4");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="acsvb5w5k"/><path class="qe97cg-lx"/><path class="g0w37q__a"/></g>`,
		"fallback": "iconmind:regression-eval-duotone-bold",
	});
}

export default Component;
