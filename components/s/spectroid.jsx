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

.ymkjw19tr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.7 36.1c8.8-.2 15.7-1.5 18.3-20.8c1.5 10 4.4 23.3 7.1 7.5c1.5 9.9 5.1 13.8 11.3 13.4");
}
</style><path class="ll0g54h-q"/><path class="ymkjw19tr"/>`,
		"fallback": "arcticons:spectroid",
	});
}

export default Component;
