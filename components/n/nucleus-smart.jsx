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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k4o_yjbkq {
  cx: 24px;
  cy: 24px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k54rvebtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 10V2.5M24 38v7.5m-6.477-20.043a3.97 3.97 0 0 1 4.357-3.949c2.063.197 3.578 2.047 3.578 4.12v2.502c0 .491.399.89.89.89h3.238a.89.89 0 0 0 .89-.89v-2.402c0-3.546-2.732-6.638-6.277-6.745a6.477 6.477 0 0 0-6.676 6.474");
}
</style><circle class="k4o_yjbkq"/><circle class="cpk0fnbgt"/><path class="k54rvebtr"/>`,
		"fallback": "arcticons:nucleus-smart",
	});
}

export default Component;
