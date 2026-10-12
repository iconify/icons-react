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
		"content": `<style>.b7k5lzb_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.25 3.75h.01");
}

.nvou4kyar {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6a5.06 5.06 0 0 0 7 7a7 7 0 1 1-7-7m8.65-.93l.49 1.02q.15.32.5.36l1.13.15q.35.05.09.29l-.82.79q-.26.24-.19.58l.2 1.12q.07.34-.24.18l-1-.54q-.31-.17-.62 0l-1 .54q-.31.16-.24-.18l.2-1.12q.07-.34-.19-.58l-.82-.79q-.26-.24.09-.29l1.13-.15q.35-.04.5-.36l.49-1.02q.15-.32.3 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="nvou4kyar"/><path class="b7k5lzb_i"/></g>`,
		"fallback": "iconoven:moon-stars",
	});
}

export default Component;
