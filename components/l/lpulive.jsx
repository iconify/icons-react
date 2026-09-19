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
		"content": `<style>.fixk077nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.95 18.638c0 2.664-2.374 4.824-5.302 4.824s-5.3-2.16-5.3-4.825s2.373-4.824 5.3-4.824s5.302 2.16 5.302 4.825");
}

.w5lsqabyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.618 34.788c2.432-3.045 3.882-6.773 3.882-10.815c0-10.228-9.178-18.519-20.5-18.519S3.5 13.746 3.5 23.974S12.678 42.491 24 42.491c3.487 0 6.768-.791 9.643-2.179c2.45 1.687 5.518 2.695 9.695 2.021c-1.92-2.366-2.739-4.926-2.72-7.546Z");
}
</style><path class="fixk077nb"/><path class="w5lsqabyd"/>`,
		"fallback": "arcticons:lpulive",
	});
}

export default Component;
