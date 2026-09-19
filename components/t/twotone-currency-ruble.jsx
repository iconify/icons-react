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
		"content": `<style>.e25chh61c {
  fill: currentColor;
  d: path("M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12");
}
</style><path class="e25chh61c"/>`,
		"fallback": "ic:twotone-currency-ruble",
	});
}

export default Component;
