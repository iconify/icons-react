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
		"content": `<style>.vteacfb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.17 39.28v1.87a2.35 2.35 0 0 1-2.35 2.35h-7.57a2.35 2.35 0 0 1-2.35-2.35v-2.46a2.33 2.33 0 0 1 1.5-2.18A16.64 16.64 0 0 0 41.17 21.1c0-9.17-7.69-16.6-17.17-16.6S6.83 11.93 6.83 21.1A16.64 16.64 0 0 0 17.6 36.51a2.33 2.33 0 0 1 1.5 2.18v2.46a2.35 2.35 0 0 1-2.35 2.35H9.18a2.35 2.35 0 0 1-2.35-2.35v-1.87");
}
</style><path class="vteacfb2g"/>`,
		"fallback": "arcticons:omegalauncher",
	});
}

export default Component;
