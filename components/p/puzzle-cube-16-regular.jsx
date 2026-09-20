import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vaftk2y_h {
  fill: currentColor;
  d: path("M2 5v6.5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H4.999v1H5v2zm8 8H6v-2h4zm-7-2h2v2h-.5A1.5 1.5 0 0 1 3 11.5zm7-1H6V6h4zM3 6h2v4H3zm7-1H6V3h4zm1 1h2v4h-2zm0 5h2v.5a1.5 1.5 0 0 1-1.5 1.5H11zm2-6.5V5h-2V3h.5A1.5 1.5 0 0 1 13 4.5");
}
</style><path class="vaftk2y_h"/>`,
		"fallback": "fluent:puzzle-cube-16-regular",
	});
}

export default Component;
