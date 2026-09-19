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
		"content": `<style>.v-6jjb8lq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.001 32.5c0-9.389 7.61-17 16.999-17s16.999 7.611 16.999 17z");
}
</style><path class="v-6jjb8lq"/>`,
		"fallback": "arcticons:kenko",
	});
}

export default Component;
