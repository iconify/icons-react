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
		"content": `<style>.ik-udbckb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 23.324a2.08 2.08 0 0 1 4.159 0v3.431m-4.159-5.51v5.51m4.159-3.431a2.08 2.08 0 0 1 4.159 0v3.431m8.306-5.51h4.159l-4.159 5.51h4.159m-10.375-3.431a2.08 2.08 0 0 1 4.158 0v1.352a2.08 2.08 0 0 1-4.158 0zm12.433 0a2.08 2.08 0 0 1 4.159 0v1.352a2.08 2.08 0 0 1-4.159 0z");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="ik-udbckb"/>`,
		"fallback": "arcticons:mozo",
	});
}

export default Component;
