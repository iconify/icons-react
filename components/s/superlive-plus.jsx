import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.brxpxfbzn {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  rx: 4px;
  ry: 4px;
}

.hwh27ic0k {
  cx: 23.958px;
  cy: 24px;
  r: 14.266px;
}

.kgeehyy8x {
  cx: 24.042px;
  cy: 24.084px;
  r: 8.601px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yekx0zw1a {
  d: path("M29.51 26.709a6.08 6.08 0 0 1-3.447 3.072m-7.899-7.928a6.2 6.2 0 0 1 6.335-4.091");
}
</style><g class="y9tr6bcfx"><rect class="brxpxfbzn"/><circle class="hwh27ic0k"/><circle class="kgeehyy8x"/><path class="yekx0zw1a"/></g>`,
		"fallback": "arcticons:superlive-plus",
	});
}

export default Component;
