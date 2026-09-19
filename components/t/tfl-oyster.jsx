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

.nc5-e2bvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.593 42.5l13.244-13.245a2 2 0 0 0 0-2.828L22.012 12.602a2 2 0 0 0-2.828 0L5.5 26.286");
}

.zrqnfo19m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.233 35.86c-2.059-8.166-8.487-14.595-16.653-16.654");
}
</style><path class="ll0g54h-q"/><path class="nc5-e2bvq"/><path class="zrqnfo19m"/>`,
		"fallback": "arcticons:tfl-oyster",
	});
}

export default Component;
