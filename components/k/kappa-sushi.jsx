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
		"content": `<style>.fuudmbbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 25.514S34.469 27.99 24 27.99S5.5 25.514 5.5 25.514s8.031 7.982 18.5 7.982s18.5-7.982 18.5-7.982");
}

.j9wwlsq0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 14.505s-8.031 2.477-18.5 2.477s-18.5-2.477-18.5-2.477s8.031 7.981 18.5 7.981s18.5-7.981 18.5-7.981");
}

.mn6mlpbef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 31.018s-8.031 2.477-18.5 2.477s-18.5-2.477-18.5-2.477S13.531 39 24 39s18.5-7.982 18.5-7.982");
}

.n5b4qh_wb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 20.01s-8.031 2.476-18.5 2.476S5.5 20.01 5.5 20.01s8.031 7.982 18.5 7.982s18.5-7.982 18.5-7.982");
}

.up2vgbcvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 9s-8.031 2.477-18.5 2.477S5.5 9 5.5 9s8.031 7.982 18.5 7.982S42.5 9 42.5 9");
}
</style><path class="up2vgbcvy"/><path class="j9wwlsq0d"/><path class="n5b4qh_wb"/><path class="fuudmbbwp"/><path class="mn6mlpbef"/>`,
		"fallback": "arcticons:kappa-sushi",
	});
}

export default Component;
