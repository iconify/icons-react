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
		"content": `<style>.djomj8bpt {
  cx: 24px;
  cy: 24px;
  r: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jhaitbi6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.099c6.573 0 11.902 5.328 11.902 11.901M24 17.2a6.8 6.8 0 0 1 6.8 6.8");
}

.jo1lj113z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.099c6.573 0 11.902 5.328 11.902 11.901");
}

.mo89whbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.874 0 21.5 9.626 21.5 21.5");
}

.n22f06btk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7v17h17");
}
</style><path class="mo89whbqo"/><circle class="djomj8bpt"/><path class="jo1lj113z"/><path class="n22f06btk"/><path class="jhaitbi6b"/>`,
		"fallback": "arcticons:myworldlink",
	});
}

export default Component;
