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
		"content": `<style>.on3tkl32s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.202h-7.17L21.605 40.798h7.17zM22.378 30.965L15.23 13.454h9.45V7.207H5.5l9.718 23.758z");
}
</style><path class="on3tkl32s"/>`,
		"fallback": "arcticons:the-verge",
	});
}

export default Component;
