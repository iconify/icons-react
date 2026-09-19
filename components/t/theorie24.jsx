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
		"content": `<style>.f-5wm485e {
  cx: 24px;
  cy: 24px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ghz-mibtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.48 5.5h15.042v37H16.48z");
}

.j6tk-lbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.5 17.5H15l-7.999-8h9.5");
}

.maxu9kbij {
  cx: 24px;
  cy: 34.499px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rjf-58bon {
  cx: 24px;
  cy: 13.501px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wg8o247ro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.5 28H15l-7.999-8h9.5M16.5 38.499H15l-7.999-8h9.5M31.5 17.5H33l7.999-8h-9.5M31.5 28H33l7.999-8h-9.5m.001 18.499H33l7.999-8h-9.5");
}
</style><path class="ghz-mibtt"/><path class="j6tk-lbwy"/><circle class="rjf-58bon"/><circle class="f-5wm485e"/><circle class="maxu9kbij"/><path class="wg8o247ro"/>`,
		"fallback": "arcticons:theorie24",
	});
}

export default Component;
