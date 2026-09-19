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

.sxosiyb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.585 36.608c14.33-11.029 21.06 3.032 37.097-3.942M2.5 24c16.565-6.832 30.469 1.638 39.386-11.933M2.92 19.76c11.828-6.685 24.108-.825 30.147-15.26");
}
</style><circle class="cpk0fnbgt"/><path class="sxosiyb6x"/>`,
		"fallback": "arcticons:paste-icon-pack",
	});
}

export default Component;
