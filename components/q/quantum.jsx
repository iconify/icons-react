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
		"content": `<style>.gjk5a5bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.815 43.5c-7.273-4.534-11.003-8.17-12.94-10.909M21.921 4.614v37.46");
}

.jbtc8_bym {
  cx: 24px;
  cy: 23.344px;
  r: 18.844px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jbtc8_bym"/><path class="gjk5a5bjk"/>`,
		"fallback": "arcticons:quantum",
	});
}

export default Component;
