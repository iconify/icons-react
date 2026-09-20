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
		"content": `<style>.lv2te0ces {
  fill: currentColor;
  d: path("M6.885 20.116h10.23v-2.808h-2v-6.616H13.5v-1h3.616V6.885H6.885v2.807h2v6.616H10.5v1H6.885zm-1 1v-4.808h2v-5.616h-2V5.885h4.807V4.5h-1v-1h4.616v1h-1v1.385h4.808v4.807h-2v5.616h2v4.808zM12 13.5");
}
</style><path class="lv2te0ces"/>`,
		"fallback": "material-symbols-light:water-bottle-large-outline-sharp",
	});
}

export default Component;
