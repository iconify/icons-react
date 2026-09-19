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
		"content": `<style>.j3s9ivbxi {
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

.sg8ehwcrb {
  d: path("m14.368 18.178l4-2.178v16m14.01-14.116l-8.104 12.232");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yu0n5sbsa {
  width: 10.6px;
  height: 16px;
  x: 23.032px;
  y: 16px;
  rx: 5.3px;
  ry: 5.3px;
}
</style><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><path class="sg8ehwcrb"/><rect class="yu0n5sbsa"/></g>`,
		"fallback": "arcticons:number-10",
	});
}

export default Component;
