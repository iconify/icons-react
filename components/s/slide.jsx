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
		"content": `<style>.az6a_3c3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.613 28.679l3.833-2.834m5.302-.688l6.432 2.766m4.631-1.266l3.06-4.351");
}

.db1plcc1o {
  cx: 9.793px;
  cy: 30.069px;
  r: 2.293px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h7fj3508o {
  cx: 36.867px;
  cy: 19.271px;
  r: 3.633px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s91dw5bkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8 8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4z");
}

.sehmr8b0c {
  cx: 17.886px;
  cy: 23.885px;
  r: 3.133px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x4yndcbdx {
  cx: 30.026px;
  cy: 29.229px;
  r: 3.133px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="s91dw5bkv"/><circle class="sehmr8b0c"/><circle class="db1plcc1o"/><circle class="x4yndcbdx"/><circle class="h7fj3508o"/><path class="az6a_3c3o"/>`,
		"fallback": "arcticons:slide",
	});
}

export default Component;
