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
		"content": `<style>.nh9xtyiul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.45 20a7.59 7.59 0 0 0-12.9 0a7.64 7.64 0 0 1 0 8a7.59 7.59 0 0 0 12.9 0a7.64 7.64 0 0 1 0-8m6.46-3.59A7.6 7.6 0 0 0 30.45 20a7.59 7.59 0 0 1 0 8a7.59 7.59 0 1 0 6.46-11.59");
}

.y-4p36bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.55 20a7.59 7.59 0 1 0 0 8a7.59 7.59 0 0 1 0-8");
}
</style><path class="y-4p36bav"/><path class="nh9xtyiul"/>`,
		"fallback": "arcticons:letterboxd",
	});
}

export default Component;
