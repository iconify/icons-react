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
		"content": `<style>.hy1w1ekwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.365 4.5h5.27M24 4.5v4.216m-3.69 0h7.38");
}

.o697tpb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.581 13.986h2.108m-2.108 5.271h2.108m-2.108 5.27h2.108m-5.27 8.433v3.162h3.162v-3.163M24 36.122V43.5");
}

.poqu5tb7y {
  width: 7.378px;
  height: 24.243px;
  x: 20.311px;
  y: 8.716px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.054px;
  ry: 1.054px;
}
</style><path class="hy1w1ekwx"/><rect class="poqu5tb7y"/><path class="o697tpb3o"/>`,
		"fallback": "arcticons:syringe",
	});
}

export default Component;
