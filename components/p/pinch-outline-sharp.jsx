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
		"content": `<style>.wkw-wtwws {
  fill: currentColor;
  d: path("M10.27 6.616V3.742L3.741 10.27h2.874v.885H2.23V6.769h.885v2.873l6.526-6.526H6.77V2.23h4.385v4.384zm2.767 15.153l-5.668-5.653l.922-.895l3.44.858v-8.81h1v10.152l-3.637-.982l4.35 4.33h6.787v-7h1v8zm1.52-6.5v-4.5h1v4.5zm2.847 0v-3.5h1v3.5zm-.962 2.635");
}
</style><path class="wkw-wtwws"/>`,
		"fallback": "material-symbols-light:pinch-outline-sharp",
	});
}

export default Component;
