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
		"content": `<style>.jsrfueifk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.726 24.835a2.385 2.385 0 0 1 2.385-2.385m-2.385 0v6.32m-2.436-2.385a2.385 2.385 0 0 1-4.77 0v-1.55a2.385 2.385 0 0 1 4.77 0m0 3.935v-6.32");
}

.qq13lqbbx {
  width: 4.771px;
  height: 6.321px;
  x: 30.839px;
  y: 22.45px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.385px;
  ry: 2.385px;
}

.tbo-6k-1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.711 19.23l-3.16 9.54l-3.161-9.54");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="ydqthzbbt"/><path class="tbo-6k-1s"/><rect class="qq13lqbbx"/><path class="jsrfueifk"/>`,
		"fallback": "arcticons:varo-bank",
	});
}

export default Component;
