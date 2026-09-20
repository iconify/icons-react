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
		"content": `<style>.d-jukx5fx {
  d: path("M8 4v13");
}

.nlfm7tnix {
  d: path("M18 4v13");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v72_3xj6k {
  d: path("M13 4v13");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vyks9vbfn"/><path class="d-jukx5fx"/><path class="v72_3xj6k"/><path class="nlfm7tnix"/><path class="pmuiqo95v"/></g>`,
		"fallback": "iconmind:prompt-library-outline-bold",
	});
}

export default Component;
