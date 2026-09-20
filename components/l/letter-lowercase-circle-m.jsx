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
		"content": `<style>.adv69lb9y {
  d: path("M16 22.7a4 4 0 0 1 8 0v6.6m-8-10.6v10.6m8-6.6a4 4 0 0 1 8 0v6.6");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVGvmqPddPE" class="adv69lb9y"/></defs><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><use href="#SVGvmqPddPE"/><use href="#SVGvmqPddPE"/></g>`,
		"fallback": "arcticons:letter-lowercase-circle-m",
	});
}

export default Component;
