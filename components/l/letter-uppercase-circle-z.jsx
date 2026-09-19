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
		"content": `<style>.cpk0fnbgt {
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

.yleu63baj {
  d: path("M18.7 16h10.6L18.7 32h10.6");
}
</style><defs><path id="SVGB2Pznbnf" class="yleu63baj"/></defs><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><use href="#SVGB2Pznbnf"/><use href="#SVGB2Pznbnf"/></g>`,
		"fallback": "arcticons:letter-uppercase-circle-z",
	});
}

export default Component;
