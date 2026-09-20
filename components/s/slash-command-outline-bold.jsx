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
		"content": `<style>.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.p0foicc2f {
  d: path("M14.5 10.5v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.waxk7w0fa {
  d: path("M7.5 13.5 11 10");
}
</style><g class="s0phu2bbs"><path class="oh4p-ccfe"/><path class="waxk7w0fa"/><path class="p0foicc2f"/></g>`,
		"fallback": "iconmind:slash-command-outline-bold",
	});
}

export default Component;
