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
		"content": `<style>.aq22_1w0d {
  cx: 3.726px;
  cy: 24px;
  r: 1.226px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.c92whtbko {
  cx: 24px;
  cy: 24px;
  r: 10.989px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.cf75mqbir {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m19.869 13.646l.029-5.425l-2.138-1.989m10.371 7.414l-.029-5.425l2.138-1.989");
}

.ecmjuyb-x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m34.354 19.869l5.425.029l1.989-2.138m-7.414 10.371l5.425-.029l1.989 2.138");
}

.kb9jhb0fg {
  cx: 24px;
  cy: 44.274px;
  r: 1.226px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.olkx6p8_p {
  cx: 24px;
  cy: 24px;
  r: 19.049px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.r2uakh0gp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m28.131 34.354l-.029 5.425l2.138 1.989m-10.371-7.414l.029 5.425l-2.138 1.989");
}

.rp8pb7b7n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m13.646 28.131l-5.425-.029l-1.989 2.138m7.414-10.371l-5.425.029l-1.989-2.138");
}

.s1ctn3b1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.117 27.342a7.642 7.642 0 1 1-10.456-10.459");
}

.xqzbwbbqm {
  cx: 24px;
  cy: 3.726px;
  r: 1.226px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.zemzfacsv {
  fill: currentColor;
  d: path("m25.376 18.233l.978 3.008h3.164l-2.56 1.86l.978 3.009l-2.56-1.86l-2.559 1.86l.978-3.009l-2.56-1.86H24.4zm0-1.05a1.05 1.05 0 0 0-.998.725l-.742 2.284h-2.401a1.05 1.05 0 0 0-.617 1.898l1.942 1.412l-.742 2.283a1.05 1.05 0 0 0 1.615 1.173l1.943-1.411l1.942 1.411a1.05 1.05 0 0 0 1.615-1.173l-.742-2.283l1.943-1.412a1.05 1.05 0 0 0-.617-1.898h-2.401l-.742-2.284a1.05 1.05 0 0 0-.998-.725");
}

.zg1j5qbsx {
  cx: 44.274px;
  cy: 24px;
  r: 1.226px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}
</style><circle class="c92whtbko"/><circle class="olkx6p8_p"/><path class="cf75mqbir"/><circle class="xqzbwbbqm"/><path class="rp8pb7b7n"/><circle class="aq22_1w0d"/><path class="r2uakh0gp"/><circle class="kb9jhb0fg"/><path class="ecmjuyb-x"/><circle class="zg1j5qbsx"/><path class="s1ctn3b1g"/><path class="zemzfacsv"/>`,
		"fallback": "arcticons:mohafiz",
	});
}

export default Component;
