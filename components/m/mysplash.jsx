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
		"content": `<style>.e8g1bdcbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 35.29L24 24l-6.5 11.29h-13l13-22.58L24 24l6.5-11.29l13 22.58Z");
}
</style><path class="e8g1bdcbs"/>`,
		"fallback": "arcticons:mysplash",
	});
}

export default Component;
