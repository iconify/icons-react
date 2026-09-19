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
		"content": `<style>.tfsee1bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.5h-4.5c-7.756 0-14-6.244-14-14v-7c0-7.756 6.244-14 14-14h9c7.756 0 14 6.244 14 14v7c0 3.936-1.608 7.483-4.206 10.022L24 24");
}
</style><path class="tfsee1bkb"/>`,
		"fallback": "arcticons:loqed",
	});
}

export default Component;
