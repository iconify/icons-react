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
		"content": `<style>.wbenpvm5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.16 5.928v36.13m19.42 0L11.676 23.993L26.58 5.928M11.676 23.993H7.16M29.898 5.5L40.84 7.561l-4.3 26.872zm4.301 31.02l3.588-.051l1.323 3.919l-3.283 2.112l-3.232-2.341z");
}
</style><path class="wbenpvm5u"/>`,
		"fallback": "arcticons:kahoot",
	});
}

export default Component;
