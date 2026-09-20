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
		"content": `<style>.a-_q4e3ky {
  fill: currentColor;
  d: path("M16 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d4dvqacly {
  d: path("M10 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.egganu2-z {
  d: path("m8 14 3 -3");
}

.gv3c38hmw {
  d: path("M16 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.j9epvsb_e {
  d: path("m15 11 2 2");
}

.l6baspbie {
  fill: currentColor;
  d: path("M3 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ns53blbaz {
  d: path("M3 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pnnbn3b_c {
  fill: currentColor;
  d: path("M10 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
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
</style><g class="s0phu2bbs"><path class="l6baspbie"/><path class="pnnbn3b_c"/><path class="a-_q4e3ky"/><path class="ns53blbaz"/><path class="d4dvqacly"/><path class="gv3c38hmw"/><path class="egganu2-z"/><path class="j9epvsb_e"/></g>`,
		"fallback": "iconmind:molecule-duotone-bold",
	});
}

export default Component;
