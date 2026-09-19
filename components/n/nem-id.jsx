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
		"content": `<style>.cnxwcob9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.972 23.514a6.264 6.264 0 1 1 .84 3.131m-.84-3.131H5.796c-1.279 0-2.296.706-2.296 1.697v5.54m6.488-7.237V30.7");
}
</style><path class="cnxwcob9w"/>`,
		"fallback": "arcticons:nem-id",
	});
}

export default Component;
