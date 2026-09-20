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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.okn_-yuok {
  fill: currentColor;
  d: path("M9 9h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-y1ijbfb {
  d: path("M9 9h6v3l-3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="okn_-yuok"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="t-y1ijbfb"/></g>`,
		"fallback": "iconmind:policy-scope-duotone-bold",
	});
}

export default Component;
