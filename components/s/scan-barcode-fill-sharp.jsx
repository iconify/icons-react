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
		"content": `<style>.iwu1w4b-t {
  fill: currentColor;
  d: path("M2 7V3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0m15-5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2M8 8v8a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m5 0v8a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m5 0v8a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0M7 22H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2m15-5v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0");
}
</style><path class="iwu1w4b-t"/>`,
		"fallback": "coolicons:scan-barcode-fill-sharp",
	});
}

export default Component;
