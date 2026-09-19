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

.jvdufb7ac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.72a10.28 10.28 0 0 1 0 20.56");
}

.njn15msyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19a5 5 0 0 1 0 10");
}

.qma4shbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.88a16.12 16.12 0 0 1 0 32.24");
}
</style><circle class="cpk0fnbgt"/><path class="njn15msyv"/><path class="jvdufb7ac"/><path class="qma4shbdr"/>`,
		"fallback": "arcticons:torbrowser",
	});
}

export default Component;
