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
		"content": `<style>.a9sveacab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.07 7.623L24 24l20.92-4.96");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kd5z1lbyj {
  width: 15.695px;
  height: 27.197px;
  x: 16.152px;
  y: 10.401px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.881px;
}
</style><circle class="cpk0fnbgt"/><rect class="kd5z1lbyj"/><path class="a9sveacab"/>`,
		"fallback": "arcticons:screentime",
	});
}

export default Component;
