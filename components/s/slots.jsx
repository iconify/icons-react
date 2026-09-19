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
		"content": `<style>.hxu_vluco {
  width: 13px;
  height: 17.815px;
  x: 30.5px;
  y: 15.093px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.n6y_0ybrq {
  width: 13px;
  height: 17.815px;
  x: 4.5px;
  y: 15.093px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.pscdgk7qx {
  width: 13px;
  height: 17.815px;
  x: 17.5px;
  y: 15.093px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.uu7z-wbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.345 28l4.305-8h-5.3m13.995 8l4.305-8h-5.3M9.345 28l4.305-8h-5.3");
}
</style><rect class="n6y_0ybrq"/><rect class="pscdgk7qx"/><rect class="hxu_vluco"/><path class="uu7z-wbhn"/>`,
		"fallback": "arcticons:slots",
	});
}

export default Component;
