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
		"content": `<style>.e-att50zs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 8.5a2 2 0 0 0-2 2v27a2 2 0 0 0 2 2h9.56V26.307l8.21 8.218l8.21-8.218V39.5h9.02a2 2 0 0 0 2-2v-27a2 2 0 0 0-2-2H30.873L24 16.404L17.127 8.5Zm17.36 7.9l.28 17.317");
}
</style><path class="e-att50zs"/>`,
		"fallback": "arcticons:melvoridle",
	});
}

export default Component;
