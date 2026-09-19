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
		"content": `<style>.j9kxmcb-t {
  cx: 26.534px;
  cy: 15.665px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.431px;
  ry: 5.514px;
}

.oczwyzs-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.534 37.85c.486-10.197-12.383-15.478-12.383-21.063c0-4.613 5.22-6.636 5.22-6.636S4.5 9.746 4.5 22.554S20.89 37.85 26.534 37.85m1.639 0c0-9.894 9.409-10.045 9.409-16.672a7.28 7.28 0 0 0-1.833-4.603c4.382 0 7.751 4.735 7.751 8.59c0 4.977-4.826 12.685-15.327 12.685");
}
</style><ellipse class="j9kxmcb-t"/><path class="oczwyzs-t"/>`,
		"fallback": "arcticons:numerica",
	});
}

export default Component;
