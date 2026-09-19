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
		"content": `<style>.zh9i-kbmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40 24L8 5.5A37.14 37.14 0 0 1 12.93 24A37.14 37.14 0 0 1 8 42.5Z");
}
</style><path class="zh9i-kbmz"/>`,
		"fallback": "arcticons:stadtmobil",
	});
}

export default Component;
