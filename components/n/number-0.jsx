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
		"content": `<style>.d8cmf6beh {
  width: 10.6px;
  height: 16px;
  x: 18.7px;
  y: 16px;
  rx: 5.3px;
  ry: 5.3px;
}

.g-2mhzyzm {
  d: path("m28.046 17.884l-8.104 12.232");
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

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVG0yuq5EEg" class="g-2mhzyzm"/></defs><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><use href="#SVG0yuq5EEg"/><rect class="d8cmf6beh"/><use href="#SVG0yuq5EEg"/><rect class="d8cmf6beh"/></g>`,
		"fallback": "arcticons:number-0",
	});
}

export default Component;
