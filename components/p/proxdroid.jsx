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
		"content": `<style>.is6e01bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 8.796a8.26 8.26 0 0 0-11.673.522L24 17.878l-7.827-8.56A8.26 8.26 0 0 0 4.5 8.796h0L18.402 24L4.5 39.205h0a8.26 8.26 0 0 0 11.673-.523L24 30.122l7.827 8.56a8.26 8.26 0 0 0 11.673.523h0L29.598 24Z");
}
</style><path class="is6e01bqd"/>`,
		"fallback": "arcticons:proxdroid",
	});
}

export default Component;
