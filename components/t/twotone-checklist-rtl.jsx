import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.di3azfbat {
  fill: currentColor;
  d: path("M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34z");
}
</style><path class="di3azfbat"/>`,
		"fallback": "ic:twotone-checklist-rtl",
	});
}

export default Component;
