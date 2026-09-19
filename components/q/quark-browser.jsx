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

.n5oj-1xjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 24c0 .878-.284 4.274-1.127 4.283c-7.274.07-7.959-.899-8.983 6.588C25.751 35.885 25.072 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12s12 5.373 12 12");
}
</style><circle class="cpk0fnbgt"/><path class="n5oj-1xjm"/>`,
		"fallback": "arcticons:quark-browser",
	});
}

export default Component;
