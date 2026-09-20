import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ko6b9lb6z {
  fill: currentColor;
  d: path("M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm3 2a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2zm10-8H4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z");
}
</style><path class="ko6b9lb6z"/>`,
		"fallback": "fluent:layout-row-three-focus-center-20-filled",
	});
}

export default Component;
