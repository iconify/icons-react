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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.fpqxyqb-q {
  d: path("M9 16a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}

.qcdzp7a_g {
  fill: currentColor;
  d: path("M9 16a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
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

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="s0phu2bbs"><path class="qcdzp7a_g"/><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="fpqxyqb-q"/></g>`,
		"fallback": "iconmind:life-cover-duotone-bold",
	});
}

export default Component;
