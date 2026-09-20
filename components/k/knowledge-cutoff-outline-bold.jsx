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
		"content": `<style>.g-pndgz7k {
  d: path("M2 12h10");
}

.me2guebva {
  d: path("m18 9.5 3 3");
}

.pkr04599e {
  d: path("m21 9.5 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y_uork5-p {
  d: path("M15 7v10");
}
</style><g class="s0phu2bbs"><path class="g-pndgz7k"/><path class="y_uork5-p"/><path class="me2guebva"/><path class="pkr04599e"/></g>`,
		"fallback": "iconmind:knowledge-cutoff-outline-bold",
	});
}

export default Component;
