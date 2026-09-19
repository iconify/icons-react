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
		"content": `<style>.j5ttez39r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11 43.5l8.5-4l9-12l8.5-4v-19l-8.5 4l-9 12l-8.5 4zm8.5-23v19m9-31v19");
}
</style><path class="j5ttez39r"/>`,
		"fallback": "arcticons:smbc",
	});
}

export default Component;
