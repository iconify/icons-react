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
		"content": `<style>.eug6-h5yh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.564 27.092c.687.895 1.55 1.229 2.75 1.229h1.66a2.8 2.8 0 0 0 2.797-2.798v-.012a2.8 2.8 0 0 0-2.797-2.797h-1.832a2.8 2.8 0 0 1-2.8-2.801a2.806 2.806 0 0 1 2.806-2.806H18.8c1.2 0 2.062.333 2.75 1.228");
}

.f4woibchx {
  width: 27.088px;
  height: 39px;
  x: 10.456px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.p4reahsza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.612 28.32V17.108h3.67c2.076 0 3.759 1.686 3.759 3.766s-1.683 3.766-3.758 3.766h-3.671m3.671-.001l3.671 3.679");
}
</style><path class="p4reahsza"/><rect class="f4woibchx"/><path class="eug6-h5yh"/>`,
		"fallback": "arcticons:score-realms",
	});
}

export default Component;
