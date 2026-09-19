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
		"content": `<style>.k1g_59b6c {
  fill: currentColor;
  d: path("m12 16.5l4-4h-3v-9h-2v9H8zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2");
}
</style><path class="k1g_59b6c"/>`,
		"fallback": "ic:system-update-alt",
	});
}

export default Component;
