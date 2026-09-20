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
		"content": `<style>.gvpticbjc {
  d: path("M18 7v4");
}

.hgjyjobhk {
  d: path("M12 7v4");
}

.kamdbib6v {
  d: path("M2 7h20");
}

.kt4_ogrrr {
  d: path("M6 7v4");
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
</style><g class="s0phu2bbs"><path class="kamdbib6v"/><path class="pmuiqo95v"/><path class="kt4_ogrrr"/><path class="hgjyjobhk"/><path class="gvpticbjc"/></g>`,
		"fallback": "iconmind:waist-measure-outline-bold",
	});
}

export default Component;
