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
		"content": `<style>.ah5fvxkch {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.33 10.75h2m-2 3.5h2m9.34-3.5h2m-2 3.5h2m-2 3.5h2m-7.67-7h2");
}

.rbcvfxb8k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5h18.5");
}

.sie8c6bwz {
  width: 18.5px;
  height: 17.5px;
  x: 2.75px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="sie8c6bwz"/><path class="rbcvfxb8k"/><path class="ah5fvxkch"/></g>`,
		"fallback": "iconoven:kanban-board-users",
	});
}

export default Component;
