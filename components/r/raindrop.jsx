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
		"content": `<style>.r4iyyok8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 19.855a9.75 9.75 0 0 1 9.75 9.75v9.75h0h-9.75a9.75 9.75 0 0 1-9.75-9.75v0a9.75 9.75 0 0 1 9.75-9.75m9.75 19.5h9.75a9.75 9.75 0 0 0 9.75-9.75h0a9.75 9.75 0 0 0-9.75-9.75h0a9.75 9.75 0 0 0-9.75 9.75");
}

.w70ucby-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.995 12.371a12.72 12.72 0 0 1 0 17.989L24 39.354h0l-8.994-8.994a12.72 12.72 0 0 1 0-17.989h0a12.72 12.72 0 0 1 17.989 0");
}
</style><path class="r4iyyok8r"/><path class="w70ucby-w"/>`,
		"fallback": "arcticons:raindrop",
	});
}

export default Component;
