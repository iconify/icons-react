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
		"content": `<style>.cd_jjcbbn {
  d: path("m8 12 4 4h3");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.icgbjebhm {
  d: path("m15 13 2 2 4 -4");
}

.ns11or76z {
  d: path("m8 12 4 -4h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="e7pgrp-wx"/><path class="ns11or76z"/><path class="icgbjebhm"/><path class="cd_jjcbbn"/></g>`,
		"fallback": "iconmind:success-path-outline-bold",
	});
}

export default Component;
