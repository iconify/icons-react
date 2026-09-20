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
		"content": `<style>.uxc5ipbii {
  fill: currentColor;
  d: path("M17.23 7.539q-.73-.731-.73-1.77T17.23 4T19 3.27t1.77.73t.73 1.77t-.73 1.769t-1.77.73t-1.77-.73M3 19V5h11.562q-.043.25-.052.49t.013.51q.04.762.316 1.44q.275.677.734 1.221L12 11L4.308 6L4 6.885l8 5.23l4.314-2.819q.54.458 1.225.716q.684.257 1.461.257q.512 0 1.027-.125T21 9.77V19z");
}
</style><path class="uxc5ipbii"/>`,
		"fallback": "material-symbols-light:mark-email-unread-sharp",
	});
}

export default Component;
