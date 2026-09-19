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
		"content": `<style>.r2w853bmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.12 16.74a7.63 7.63 0 0 1 7.34 7.34a7.63 7.63 0 0 1-7.34 7.35a7.64 7.64 0 0 1-7.35-7.35a7.63 7.63 0 0 1 7.35-7.34M8.4 6.45v35.1a2 2 0 0 0 1.95 2h2.38V4.5h-2.38A2 2 0 0 0 8.4 6.45");
}

.zf4xg2zfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.73 4.5v39h24.92a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95Z");
}
</style><path class="r2w853bmu"/><path class="zf4xg2zfj"/>`,
		"fallback": "arcticons:tachiyomi",
	});
}

export default Component;
