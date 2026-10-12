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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pk985rr6i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.4 12.6c.5 1 .6 2.15.1 3.4m-7.25 0h3.5");
}

.rxlz5vboi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 10.25h.01");
}

.s86-jccbc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 7.5c.75-.75 2-.9 3-.5");
}

.tiofn8-5t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 10.25h.01");
}

.wfy6ndqvg {
  cx: 15px;
  cy: 10.25px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="s86-jccbc"/><path class="tiofn8-5t"/><circle class="wfy6ndqvg"/><path class="rxlz5vboi"/><path class="pk985rr6i"/></g>`,
		"fallback": "iconoven:monocle-face",
	});
}

export default Component;
