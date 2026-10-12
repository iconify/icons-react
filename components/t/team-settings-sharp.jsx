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
		"content": `<style>.fe845acww {
  cx: 16.75px;
  cy: 14.75px;
  r: 1.25px;
}

.qyx1q-b5s {
  cx: 19.75px;
  cy: 18.5px;
  r: 1.25px;
}

.r3pmgdciu {
  cx: 8.25px;
  cy: 8px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yffohilng {
  d: path("M3.5 20.25h10.25v-.75c0-2.9-2.45-5-5.5-5s-5.5 2.1-5.5 5v.75zM14.25 4a3.5 3.5 0 0 1 0 7m2.5 1.75v.75m0 2.5v5.25m3-8.5v4.5m0 2.5v1.5");
}
</style><g class="x2cwu0gfd"><circle class="r3pmgdciu"/><path class="yffohilng"/><circle class="fe845acww"/><circle class="qyx1q-b5s"/></g>`,
		"fallback": "iconoven:team-settings-sharp",
	});
}

export default Component;
