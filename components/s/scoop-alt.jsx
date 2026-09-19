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
		"content": `<style>.otnr66b4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.806 8.089h24.388V42.5H11.806zm-4.97 10.733h34.328M6.836 35.777h34.328M6.836 27.3h34.328M14.875 5.5l3.926 3.759M33.125 5.5l-3.926 3.758");
}
</style><path class="otnr66b4l"/>`,
		"fallback": "arcticons:scoop-alt",
	});
}

export default Component;
