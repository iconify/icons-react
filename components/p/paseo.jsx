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
		"content": `<style>.b1am315hl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.408 25.945c1.5.71 8.086.644 9.612.459");
}

.w6vy8bnyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.682 5.918l3.724 20.016l-.627.054c-.266 3.105-1.962 5.522-5.58 6.785s-8.381 3.988-7.891 7.376c1.317 4.03 4.468 4.543 15.162.895s14.603-4.154 14.233-5.81c-.491-2.2-3.604-9.456-5.001-9.06a7 7 0 0 0-.734.216L28.766 4.5Z");
}
</style><path class="w6vy8bnyt"/><path class="b1am315hl"/>`,
		"fallback": "arcticons:paseo",
	});
}

export default Component;
