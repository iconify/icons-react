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
		"content": `<style>.s-s-kbkhq {
  cx: 11.657px;
  cy: 8.768px;
  r: 4.268px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x0-bh9c7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.328 4.5c-16.283 9.06-25.671 25.606 3.283 39c-16.545-.92-27.65-11.046-25.869-21.798C16.482 11.197 24.328 6.864 37.328 4.5");
}
</style><path class="x0-bh9c7x"/><circle class="s-s-kbkhq"/>`,
		"fallback": "arcticons:naukricom",
	});
}

export default Component;
