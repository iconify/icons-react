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
		"content": `<style>.c3f-hsbol {
  cx: 24px;
  cy: 24px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.mmg_a9bun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.89 19.971l3.23.581l-4.09 4.393l3.23.581m3.029-6.258h5.3l-5.3 8h5.3");
}

.zkeb72b3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.495 13.793l12.112-2.131l-8.975 19.88l12.112-2.13");
}
</style><circle class="cpk0fnbgt"/><circle class="c3f-hsbol"/><path class="mmg_a9bun"/><path class="zkeb72b3j"/>`,
		"fallback": "arcticons:sleeptimer",
	});
}

export default Component;
