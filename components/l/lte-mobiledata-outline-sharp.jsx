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
		"content": `<style>.igzb9qbln {
  fill: currentColor;
  d: path("M5.154 15.5v-7h1v6h3v1zm6.577 0v-6h-2v-1h5v1h-2v6zm4.769 0v-7h4v1h-3v2h3v1h-3v2h3v1z");
}
</style><path class="igzb9qbln"/>`,
		"fallback": "material-symbols-light:lte-mobiledata-outline-sharp",
	});
}

export default Component;
