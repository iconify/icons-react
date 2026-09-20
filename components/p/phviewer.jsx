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

.s9lh3obht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.221 12.5v17.196m0-7.093a4.3 4.3 0 0 1 8.598 0v7.093M13.18 25.397a4.3 4.3 0 0 0 8.598 0v-2.794a4.3 4.3 0 0 0-8.598 0m.001-4.299V35.5");
}
</style><path class="s9lh3obht"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:phviewer",
	});
}

export default Component;
