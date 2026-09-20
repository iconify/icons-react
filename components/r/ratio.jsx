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

.lwwy4fq8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.1 20.4zc1.6 0 2.9 1.3 2.9 2.9v1.9c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9v-1.9c0-1.6 1.3-2.9 2.9-2.9M10 23.3c0-1.6 1.3-2.9 2.9-2.9m-2.9 0v7.7");
}

.sbj788ubb {
  cx: 29.3px;
  cy: 16.9px;
  r: 0.8px;
  fill: currentColor;
}

.ysa_b7bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 20.4v7.7m-4.3-10v10m-1.5-7.7h3m-5.9 4.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9v-1.9c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9m0 4.8v-7.7");
}
</style><path class="lwwy4fq8h"/><circle class="sbj788ubb"/><path class="ysa_b7bok"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:ratio",
	});
}

export default Component;
