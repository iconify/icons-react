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
		"content": `<style>.jt-57fvhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.197 23.553a8.123 8.123 0 0 1 8.122-7.996a8.123 8.123 0 0 1 .168 16.243v13.057C36.119 44.765 45.5 35.31 45.5 23.68c0-11.698-9.483-21.18-21.181-21.18c-11.648 0-21.111 9.405-21.18 21.053z");
}

.mm1cp0b3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 26.574A21.18 21.18 0 0 0 21.464 45.5V29.158a2.58 2.58 0 0 0-2.582-2.584z");
}
</style><path class="jt-57fvhy"/><path class="mm1cp0b3z"/>`,
		"fallback": "arcticons:perfice",
	});
}

export default Component;
