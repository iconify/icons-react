import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.romecwb-i {
  fill: currentColor;
  d: path("M207 36H49a21 21 0 0 0-21 21v49.21a21 21 0 0 0 12.31 19.11l56 25.47a52 52 0 1 0 63.32 0l56-25.47A21 21 0 0 0 228 106.21V57a21 21 0 0 0-21-21m-79 102.82l-28-12.73V60h56v66.09ZM52 60h24v55.18l-24-10.91Zm76 160a28 28 0 1 1 28-28a28 28 0 0 1-28 28m76-115.73l-24 10.91V60h24Z");
}
</style><path class="romecwb-i"/>`,
		"fallback": "ph:medal-military-bold",
	});
}

export default Component;
