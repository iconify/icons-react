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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.ezp0d4btt {
  d: path("M2 16h3");
}

.gnit4mb6c {
  d: path("M7.5 16h3");
}

.j1kezkxcy {
  d: path("M13.5 10H22");
}

.lgyhdeb-s {
  d: path("M2 10h8.5");
}

.lkpe2ldcq {
  d: path("M13.5 16H22");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c7dgfu7wx"/><path class="lgyhdeb-s"/><path class="j1kezkxcy"/><path class="ezp0d4btt"/><path class="gnit4mb6c"/><path class="lkpe2ldcq"/></g>`,
		"fallback": "iconmind:recursive-split-outline-bold",
	});
}

export default Component;
