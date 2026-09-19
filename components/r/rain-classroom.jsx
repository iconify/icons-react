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
		"content": `<style>.v6remmhei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30.5v7m0-32v19m7.4-3.5v19m0-32v7m7.4 14.5v13m0-32v13m22.2 14v-32l-14.8 5v32z");
}
</style><path class="v6remmhei"/>`,
		"fallback": "arcticons:rain-classroom",
	});
}

export default Component;
