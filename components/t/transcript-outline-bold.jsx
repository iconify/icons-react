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
		"content": `<style>.d-_u6mtyl {
  d: path("M14 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.idjxm9bid {
  d: path("M15 13h3");
}

.r_4k1sbsg {
  d: path("M7 13h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.serb2umws {
  d: path("M15 8h3");
}

.strt8mboj {
  d: path("M7 8h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="strt8mboj"/><path class="serb2umws"/><path class="r_4k1sbsg"/><path class="idjxm9bid"/><path class="d-_u6mtyl"/></g>`,
		"fallback": "iconmind:transcript-outline-bold",
	});
}

export default Component;
