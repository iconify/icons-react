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

.sqmmv74ij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 28.2h4.1m-4.1-8.4h4.1M17.5 24h2.7m-2.7-4.2v8.4m16.8 0h4.2m-4.2-8.4h4.2M34.3 24H37m-2.7-4.2v8.4m-24.8 0v-8.3h2.7c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8H9.5m2.9 0l2.6 2.7m17.1-8.4L30 28.2l-2.1-8.4l-2.1 8.4l-2.1-8.4");
}
</style><path class="sqmmv74ij"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:rewe",
	});
}

export default Component;
