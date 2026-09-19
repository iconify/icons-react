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
		"content": `<style>.qgo1_rb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.654 24.005L19.346 17.5v13z");
}

.yx-gxt2ba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.678 11.278C41.247 9 40.003 7.22 38.412 6.606c-2.146-1.177-22.878-1.76-28.9.038c-1.592.615-2.835 2.393-3.266 4.671c-.962 6.062-1.036 19.187.028 25.397c.43 2.277 1.674 4.056 3.265 4.671c4.237 1.39 24.396 1.585 28.892 0c1.594-.61 2.842-2.39 3.275-4.671c1.026-6.618 1.1-18.918-.028-25.434");
}
</style><path class="yx-gxt2ba"/><path class="qgo1_rb9f"/>`,
		"fallback": "arcticons:m3u",
	});
}

export default Component;
