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
		"content": `<style>.v4qhczbye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.5a13.4 13.4 0 0 1 6 1.42V15a6 6 0 0 0-12 0v2.92a13.4 13.4 0 0 1 6-1.42M27.5 28a3.5 3.5 0 1 0-5 3.15V36h3v-4.85a3.49 3.49 0 0 0 2-3.15");
}

.z95_r1bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 21.523V15a10.5 10.5 0 0 0-21 0v6.523a13.5 13.5 0 1 0 21 0");
}
</style><path class="z95_r1bkq"/><path class="v4qhczbye"/>`,
		"fallback": "arcticons:nc-passwords",
	});
}

export default Component;
