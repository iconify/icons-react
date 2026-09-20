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
		"content": `<style>.h9fb_9biv {
  d: path("M20 5v12");
}

.leemd3bqp {
  d: path("M15 5v12");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qltxbpdvm {
  d: path("M4 5v12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr_jskylo {
  d: path("M7 5v12");
}

.z3it7clmt {
  d: path("M11 5v12");
}
</style><g class="s0phu2bbs"><path class="qltxbpdvm"/><path class="tr_jskylo"/><path class="z3it7clmt"/><path class="leemd3bqp"/><path class="h9fb_9biv"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:isbn-outline-bold",
	});
}

export default Component;
