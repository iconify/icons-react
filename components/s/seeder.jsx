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

.n56aerbfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.034 30.65C20.137 31.576 21.327 32 24 32h1.355a3.996 3.996 0 0 0 3.99-4h0a3.996 3.996 0 0 0-3.99-4h-2.71a3.996 3.996 0 0 1-3.99-4h0a3.996 3.996 0 0 1 3.99-4H24c2.673 0 3.863.424 4.966 1.35M24 2.5l3.963 3.75L24 10m0 35.5l-3.963-3.75L24 38");
}
</style><circle class="k4o_yjbkq"/><circle class="cpk0fnbgt"/><path class="n56aerbfp"/>`,
		"fallback": "arcticons:seeder",
	});
}

export default Component;
