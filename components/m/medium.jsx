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
		"content": `<style>.e03f53bdg {
  cx: 31.198px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.269px;
  ry: 9.068px;
}

.hgum3h4xx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2m0-33a2 2 0 0 0-2-2h-33a2 2 0 0 0-2 2");
}

.k09b8-xtl {
  cx: 15.329px;
  cy: 24px;
  r: 9.068px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vpr9h-4wx {
  cx: 39.869px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.87px;
  ry: 9.068px;
}
</style><path class="hgum3h4xx"/><circle class="k09b8-xtl"/><ellipse class="e03f53bdg"/><ellipse class="vpr9h-4wx"/>`,
		"fallback": "arcticons:medium",
	});
}

export default Component;
