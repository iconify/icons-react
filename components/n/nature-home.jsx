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
		"content": `<style>.nmntmgbnp {
  d: path("M4.5 28.317h39z");
}

.q332r2vjg {
  cx: 24px;
  cy: 24px;
  r: 11.1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="nmntmgbnp"/><circle class="q332r2vjg"/></g>`,
		"fallback": "arcticons:nature-home",
	});
}

export default Component;
