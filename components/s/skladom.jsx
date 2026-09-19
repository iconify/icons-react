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
		"content": `<style>.i2ls9rbsb {
  cx: 29.91px;
  cy: 30.048px;
  r: 2.463px;
}

.izrx4jblh {
  cx: 24px;
  cy: 24px;
  r: 13.679px;
}

.jwnw4xbxi {
  d: path("m5.5 5.5l8.828 8.828M42.5 5.5l-8.828 8.828M42.5 42.5l-8.828-8.828M5.5 42.5l8.828-8.828");
}

.r5mut7bsl {
  cx: 29.91px;
  cy: 17.952px;
  r: 2.463px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="izrx4jblh"/><path class="jwnw4xbxi"/><circle class="r5mut7bsl"/><circle class="i2ls9rbsb"/></g>`,
		"fallback": "arcticons:skladom",
	});
}

export default Component;
