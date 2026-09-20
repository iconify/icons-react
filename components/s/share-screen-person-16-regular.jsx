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
		"content": `<style>.tbehivbxd {
  fill: currentColor;
  d: path("M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h3.538A3 3 0 0 1 7 12.5q0-.257.05-.5H3.5A1.5 1.5 0 0 1 2 10.5v-5A1.5 1.5 0 0 1 3.5 4h9A1.5 1.5 0 0 1 14 5.5v.841c.273.41.447.891.49 1.41a.266.266 0 0 0 .26.249a.25.25 0 0 0 .25-.25V5.5A2.5 2.5 0 0 0 12.5 3zm10 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 13.75 8 12.5A1.5 1.5 0 0 1 9.5 11h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="tbehivbxd"/>`,
		"fallback": "fluent:share-screen-person-16-regular",
	});
}

export default Component;
