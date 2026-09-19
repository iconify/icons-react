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
		"content": `<style>.s_or9zcmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.295 42.5L40.79 16.538l-4.354-5.389l4.664-1.4l-10-4.249l-3.886 8.188L6.9 24h18.292z");
}
</style><path class="s_or9zcmo"/>`,
		"fallback": "arcticons:satori-reader",
	});
}

export default Component;
