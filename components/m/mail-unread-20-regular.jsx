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
		"content": `<style>.mliqtsbmc {
  fill: currentColor;
  d: path("M18 5.95a2.5 2.5 0 1 0-1.002-4.9A2.5 2.5 0 0 0 18 5.95M4.5 3h9.535a3.5 3.5 0 0 0 0 1H4.5A1.5 1.5 0 0 0 3 5.5v.302l7 4.118l5.754-3.386c.375.217.795.365 1.241.43l-6.741 3.967a.5.5 0 0 1-.426.038l-.082-.038L3 6.963V13.5A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5V6.965a3.5 3.5 0 0 0 1 0V13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-8A2.5 2.5 0 0 1 4.5 3");
}
</style><path class="mliqtsbmc"/>`,
		"fallback": "fluent:mail-unread-20-regular",
	});
}

export default Component;
