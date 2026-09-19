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
		"content": `<style>.bpt38-g2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27.78c4.16 3.526 6.244 5.954 9.397 5.954c5.236 0 6.732-9.404 14.052-9.404c4.382 0 8.7 5.61 8.7 5.61");
}

.d7ap6wb5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.049 9.684h-12.77a6.78 6.78 0 0 0-6.779 6.78v18.588a6.78 6.78 0 0 0 6.78 6.78h18.588a6.78 6.78 0 0 0 6.78-6.78V21.979M29.271 8.73a2.56 2.56 0 0 1 2.562 2.562a2.56 2.56 0 0 1 2.562-2.562a2.56 2.56 0 0 1-2.562-2.562a2.56 2.56 0 0 1-2.562 2.562m3.525 5.805a4.85 4.85 0 0 1 4.852 4.852a4.85 4.85 0 0 1 4.852-4.852a4.85 4.85 0 0 1-4.852-4.852a4.85 4.85 0 0 1-4.852 4.852");
}

.wxoqibbsr {
  cx: 15.912px;
  cy: 20.002px;
  r: 3.847px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="d7ap6wb5z"/><circle class="wxoqibbsr"/><path class="bpt38-g2d"/>`,
		"fallback": "arcticons:pixelshot",
	});
}

export default Component;
