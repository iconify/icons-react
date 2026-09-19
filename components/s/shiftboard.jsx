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
		"content": `<style>.aq-mam02q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.815 36.905a5.15 5.15 0 0 1-6.31 3.643q0 0 0 0a5.15 5.15 0 0 1-3.642-6.31q0 0 0 0m6.51-23.143l-6.51 23.144M42.324 13.76l-6.51 23.145");
}

.tj2bmz04y {
  cx: 10.651px;
  cy: 12.427px;
  r: 5.151px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xwyhn5m7a {
  cx: 10.651px;
  cy: 35.209px;
  r: 5.151px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yaqj32hvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.373 11.095a5.151 5.151 0 1 1 9.951 2.666");
}
</style><path class="yaqj32hvj"/><circle class="tj2bmz04y"/><circle class="xwyhn5m7a"/><path class="aq-mam02q"/>`,
		"fallback": "arcticons:shiftboard",
	});
}

export default Component;
