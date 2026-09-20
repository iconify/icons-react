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
		"content": `<style>.eonh4nhds {
  fill: currentColor;
  d: path("M13.75 2A2.25 2.25 0 0 1 16 4.25v7.087a3.5 3.5 0 0 0-1.5 1.36V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h5.802c.088.525.29 1.037.613 1.5H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm-2.501 15.5a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5zm8.751-3a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z");
}
</style><path class="eonh4nhds"/>`,
		"fallback": "fluent:phone-person-24-regular",
	});
}

export default Component;
