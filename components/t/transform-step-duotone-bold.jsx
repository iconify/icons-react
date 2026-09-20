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
		"content": `<style>.e69i7fcek {
  d: path("M17 12h5");
}

.eaf3kgp-i {
  d: path("m10 14 4 -4");
}

.inrb56b-a {
  fill: currentColor;
  d: path("M7 9a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l8unaacgj {
  d: path("M2 12h5");
}

.n9iuwztor {
  d: path("M7 9a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="inrb56b-a"/><path class="l8unaacgj"/><path class="n9iuwztor"/><path class="eaf3kgp-i"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:transform-step-duotone-bold",
	});
}

export default Component;
