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
		"content": `<style>.szjx7golk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.976c1.985-2.538 5.277-4.323 5.277-4.323C26.111 22.442 24 18.85 24 18.85s-2.11 3.593-5.277 5.804c0 0 3.292 1.784 5.277 4.323");
}

.w18e8_lkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.534c2.513-2.915 8.242-7.086 8.242-7.086s1.033 2.29 3.77 3.87c0 0-2.664 6.684-7.59 8.946c0 0 7.69-.453 15.078-9.55C39.228 28.499 24 16.26 24 6.736C24 16.26 8.772 28.498 4.5 31.715c7.388 9.096 15.077 9.549 15.077 9.549c-4.925-2.262-7.589-8.946-7.589-8.946c2.737-1.58 3.77-3.87 3.77-3.87s5.73 4.171 8.242 7.086");
}
</style><path class="w18e8_lkh"/><path class="szjx7golk"/>`,
		"fallback": "arcticons:shadow-fight-4",
	});
}

export default Component;
