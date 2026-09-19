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
		"content": `<style>.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.xk2yctbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.834 21.772a5.136 5.136 0 1 1 0 10.272H18.36V11.5h8.474a5.136 5.136 0 1 1 0 10.272m0 0H18.36M16.03 36.5h15.94m-13.61-25h-2.33m2.33 20.543h-2.33");
}
</style><path class="ll0g54h-q"/><path class="xk2yctbly"/>`,
		"fallback": "arcticons:meinblau",
	});
}

export default Component;
