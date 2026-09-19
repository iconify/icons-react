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
		"content": `<style>.k8kk7hbsv {
  fill: currentColor;
  d: path("M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11zm4.17 9.88L3.12 2.83a.996.996 0 1 0-1.41 1.41l2.07 2.07A10 10 0 0 0 2 12c0 5.52 4.48 10 10 10c2.11 0 4.07-.66 5.68-1.78l2.07 2.07c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M7 13v-2h1.46l2 2z");
}
</style><path class="k8kk7hbsv"/>`,
		"fallback": "ic:round-do-disturb-off",
	});
}

export default Component;
