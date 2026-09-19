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
		"content": `<style>.letwobbab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 39.701V26.8c0-10.218-8.283-18.5-18.5-18.5S5.5 16.58 5.5 26.799V39.7");
}

.ympd9nbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.62 39.701V26.8a6.38 6.38 0 1 1 12.76 0v12.9");
}
</style><path class="ympd9nbzq"/><path class="letwobbab"/>`,
		"fallback": "arcticons:krak",
	});
}

export default Component;
