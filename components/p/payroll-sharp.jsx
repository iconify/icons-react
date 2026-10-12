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
		"content": `<style>.dxmh3lbzl {
  cx: 17.25px;
  cy: 13px;
  r: 4px;
}

.ru5ha2bbk {
  d: path("M3.5 19.75h8.75V19c0-3-2.1-5.25-4.75-5.25S2.75 16 2.75 19v.75z");
}

.trv9mgb9o {
  cx: 7.5px;
  cy: 7.25px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj35lbqxs {
  d: path("m18.38 12.02l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73");
}
</style><g class="x2cwu0gfd"><circle class="trv9mgb9o"/><path class="ru5ha2bbk"/><circle class="dxmh3lbzl"/><path class="xj35lbqxs"/></g>`,
		"fallback": "iconoven:payroll-sharp",
	});
}

export default Component;
