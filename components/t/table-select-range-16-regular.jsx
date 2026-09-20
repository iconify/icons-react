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
		"content": `<style>.ckeqpouqm {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM6 13h4v-2H6zm5 0h.5a1.5 1.5 0 0 0 1.5-1.5V11h-2zm-8-1.5A1.5 1.5 0 0 0 4.5 13H5v-2H3zM4.5 3A1.5 1.5 0 0 0 3 4.5V10h7V3zm6.5 7h2V6h-2zm0-5h2v-.5A1.5 1.5 0 0 0 11.5 3H11z");
}
</style><path class="ckeqpouqm"/>`,
		"fallback": "fluent:table-select-range-16-regular",
	});
}

export default Component;
