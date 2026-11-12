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
		"content": `<style>.paj49j2ij {
  fill: currentColor;
  d: path("m12.949 3.316l-3 9a1 1 0 0 1-1.843.131l-1.38-2.759l1.981-1.981a.999.999 0 1 0-1.414-1.414L5.312 8.274l-2.759-1.38a1 1 0 0 1 .131-1.843l9-3a1.001 1.001 0 0 1 1.265 1.265M11 17a6 6 0 1 1 12 0a6 6 0 0 1-12 0m2 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0m5-2v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0");
}
</style><path class="paj49j2ij"/>`,
		"fallback": "coolicons:paper-plane-clock-corner-fill-sharp",
	});
}

export default Component;
