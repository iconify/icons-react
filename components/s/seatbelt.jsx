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
		"content": `<style>.fgm63djkc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.34 4.25l2.11 1.77q.57.48 1.06-.09l.16-.19q.48-.58 1.05-.1l3.45 2.9q.58.48.09 1.05l-.8.96q-.32.38.06.7l.96.81l.8-.96q.81-.96 2.53.49l1.91 1.61q1.73 1.44.28 3.17l-2.25 2.68q-1.44 1.72-3.17.27l-1.91-1.6q-1.73-1.45-.92-2.41l.8-.95l-.96-.81q-.38-.32-.7.06l-.8.96q-.49.58-1.06.09l-3.45-2.89q-.57-.48-.09-1.05l.16-.2q.48-.57-.09-1.05L3.45 7.7q-.57-.48-.09-1.06l1.93-2.3q.48-.57 1.05-.09m4.18 5.14l-1.29 1.53");
}

.j_im5_bmk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.39 15.62h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="fgm63djkc"/><path class="j_im5_bmk"/></g>`,
		"fallback": "iconoven:seatbelt",
	});
}

export default Component;
