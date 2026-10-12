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
		"content": `<style>.frskmbb5i {
  cx: 9.5px;
  cy: 15px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ilmmol0fy {
  cx: 14.5px;
  cy: 15px;
  r: 1.25px;
}

.u1a9bn6oe {
  cx: 9.5px;
  cy: 9px;
  r: 1.25px;
}

.wwsgfbcwe {
  d: path("M7.25 3.75H5.5a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h1.75m9.5-16.5h1.75a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1h-1.75");
}

.zczcnxb6y {
  cx: 14.5px;
  cy: 9px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="wwsgfbcwe"/><circle class="u1a9bn6oe"/><circle class="zczcnxb6y"/><circle class="frskmbb5i"/><circle class="ilmmol0fy"/></g>`,
		"fallback": "iconoven:matrix-brackets",
	});
}

export default Component;
