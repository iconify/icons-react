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
		"content": `<style>.cz52nob5z {
  cx: 9px;
  cy: 9.5px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4l-9ybuj {
  cx: 12px;
  cy: 12px;
  r: 9px;
}

.wtqeeyb2r {
  cx: 14.5px;
  cy: 15px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="cz52nob5z"/><circle class="wtqeeyb2r"/></g>`,
		"fallback": "iconoven:moon-crater",
	});
}

export default Component;
