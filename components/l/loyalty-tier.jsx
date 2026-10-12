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
		"content": `<style>.afq5p67fy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.39 9.07l.69 1.53q.14.32.49.35l1.66.18q.35.04.09.27l-1.24 1.13q-.26.23-.19.57l.35 1.64q.07.34-.24.17l-1.45-.84q-.3-.17-.6 0l-1.45.84q-.31.17-.24-.17l.35-1.64q.07-.34-.19-.57L5.18 11.4q-.26-.23.09-.27l1.66-.18q.35-.03.49-.35l.69-1.53q.14-.32.28 0");
}

.ak9rggbmc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 10h.01m3.49 0h.01M14 14h.01m3.49 0h.01");
}

.l9mf0ibos {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="l9mf0ibos"/><path class="afq5p67fy"/><path class="ak9rggbmc"/></g>`,
		"fallback": "iconoven:loyalty-tier",
	});
}

export default Component;
