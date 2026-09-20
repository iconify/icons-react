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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.pst98pbad {
  d: path("M21 10v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vckqcjbbb {
  d: path("M18 5v14");
}

.yeuzzbchl {
  d: path("M9.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="s0phu2bbs"><path class="yeuzzbchl"/><path class="coi-np7dk"/><path class="vckqcjbbb"/><path class="pst98pbad"/></g>`,
		"fallback": "iconmind:voice-agent-outline-bold",
	});
}

export default Component;
