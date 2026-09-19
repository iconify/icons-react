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
		"content": `<style>.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.ppa6s8b5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.45 13.7V17a2 2 0 1 1-4 0v-3.3m-9.9 5.291V11l4 8l4-7.988V19m-2.7 15.317v.033a2.65 2.65 0 1 1-5.3 0v-2.7A2.65 2.65 0 0 1 13.2 29h0a2.65 2.65 0 0 1 2.65 2.65v.033M17.75 29h5.3m-2.65 8v-8m4.55 0v5.35a2.65 2.65 0 1 0 5.3 0V29m4.55 0l2.65-3.65h-12.5");
}

.t45fbnbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.45 17v2.7a2 2 0 0 1-3.414 1.414");
}
</style><path class="t45fbnbqu"/><path class="ppa6s8b5i"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:myctu",
	});
}

export default Component;
