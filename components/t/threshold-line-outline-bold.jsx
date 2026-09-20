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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.e_6o-gbms {
  d: path("M6 10h13");
}

.mcdduacou {
  d: path("M17 7v11");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qn21uclav {
  d: path("M13 12v6");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e_6o-gbms"/><path class="a5uqb5btg"/><path class="qn21uclav"/><path class="mcdduacou"/></g>`,
		"fallback": "iconmind:threshold-line-outline-bold",
	});
}

export default Component;
