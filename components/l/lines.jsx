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
		"content": `<style>.j8f1mya7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 19.4v9.2h4.6m2.5-9.2v9.2m11.2 0h4.5m-4.5-9.2h4.5M26.8 24h2.9m-2.9-4.6v9.2m-8.6 0v-9.2l6 9.2v-9.2m9.4 8.2c.6.7 1.3 1 2.2 1h1.3c1.3 0 2.3-1 2.3-2.3h0c0-1.3-1-2.3-2.3-2.3h-1.5c-1.3 0-2.3-1-2.3-2.3h0c0-1.3 1-2.3 2.3-2.3h1.3c1 0 1.7.3 2.2 1");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="ll0g54h-q"/><path class="j8f1mya7o"/>`,
		"fallback": "arcticons:lines",
	});
}

export default Component;
