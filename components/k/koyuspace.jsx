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
		"content": `<style>.vnxsq4brh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 37.14A15.44 15.44 0 0 1 8.78 24A15.44 15.44 0 0 1 24 8.36A15.44 15.44 0 0 1 39.22 24A15.44 15.44 0 0 1 24 39.64");
}
</style><path class="vnxsq4brh"/>`,
		"fallback": "arcticons:koyuspace",
	});
}

export default Component;
