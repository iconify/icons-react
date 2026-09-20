import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgco4nbez {
  fill: currentColor;
  d: path("M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8M112 72h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m112 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192Z");
}
</style><path class="bgco4nbez"/>`,
		"fallback": "ph:laptop-fill",
	});
}

export default Component;
