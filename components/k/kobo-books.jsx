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
		"content": `<style>.cuzsle0dq {
  width: 5.435px;
  height: 7.202px;
  x: 33.065px;
  y: 20.341px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.717px;
  ry: 2.717px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.m45nyfbrf {
  width: 5.435px;
  height: 7.202px;
  x: 16.922px;
  y: 20.341px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.717px;
  ry: 2.717px;
}

.uxuk6nbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 16.673v10.87m.001-2.309l4.92-4.897m-3.354 3.338l3.868 3.851m10.015-4.467a2.717 2.717 0 1 1 5.435 0v1.766a2.717 2.717 0 1 1-5.435 0m0 2.718v-10.87");
}
</style><path class="i9clfwm2k"/><rect class="cuzsle0dq"/><rect class="m45nyfbrf"/><path class="uxuk6nbvq"/>`,
		"fallback": "arcticons:kobo-books",
	});
}

export default Component;
