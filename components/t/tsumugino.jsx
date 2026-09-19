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
		"content": `<style>.ujvpm-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24H14m5 0h10m5 0h11.5M3.85 16.5h40.3m-40.3 15H21.5m5 0h17.65M24 2.5V14m0 5v2.5m0 5v19m7.5-41.65V14m0 5v10m0 5v10.15m-15-40.3V14m0 5v10m0 5v10.15");
}
</style><path class="ujvpm-bjh"/>`,
		"fallback": "arcticons:tsumugino",
	});
}

export default Component;
