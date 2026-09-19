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

.kjzly3dff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.859 24H13.14m18.536-7.676l4.717-4.717a17.527 17.527 0 0 1-24.786 24.786l4.715-4.715");
}

.vodlre0wb {
  cx: 23.999px;
  cy: 24px;
  r: 10.86px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="vodlre0wb"/><path class="kjzly3dff"/>`,
		"fallback": "arcticons:solunarperiods",
	});
}

export default Component;
