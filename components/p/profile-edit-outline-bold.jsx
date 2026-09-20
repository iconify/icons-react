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
		"content": `<style>.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v74zc_fve {
  d: path("m13 18 5 -5 2 2 -5 5Z");
}
</style><g class="s0phu2bbs"><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="v74zc_fve"/></g>`,
		"fallback": "iconmind:profile-edit-outline-bold",
	});
}

export default Component;
