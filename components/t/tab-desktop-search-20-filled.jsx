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
		"content": `<style>.sdgsqccvk {
  fill: currentColor;
  d: path("M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h2.5v2.5a1.5 1.5 0 0 0 1.5 1.5h7.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-2.581a1.5 1.5 0 0 0-.354-.56l-2-2a4.5 4.5 0 0 0-6.565-5.68zm6 0V3h5.5a2.5 2.5 0 0 1 2.5 2.5V6h-7.5a.5.5 0 0 1-.5-.5M5.5 16c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 16m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="sdgsqccvk"/>`,
		"fallback": "fluent:tab-desktop-search-20-filled",
	});
}

export default Component;
