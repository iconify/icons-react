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
		"content": `<style>.f--yjl04t {
  cx: 15.75px;
  cy: 12.25px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kocvjibha {
  d: path("M6.25 10.75h3.5m-3.5 3h3.5m-3.25 4v2.5m11-2.5v2.5");
}

.nfr6d2b3k {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 6.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="nfr6d2b3k"/><circle class="f--yjl04t"/><path class="kocvjibha"/></g>`,
		"fallback": "iconoven:projector-screen",
	});
}

export default Component;
