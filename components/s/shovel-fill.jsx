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
		"content": `<style>.mr3jmzb0c {
  fill: currentColor;
  d: path("m15.707 4.293l4 4a.999.999 0 1 1-1.414 1.414L17 8.414L12.414 13l1.293 1.293a2.414 2.414 0 0 1 0 3.414l-1 1A1 1 0 0 1 12 19H8a3 3 0 0 1-3-3v-4c0-.265.105-.52.293-.707l1-1a2.414 2.414 0 0 1 3.414 0L11 11.586L15.586 7l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="mr3jmzb0c"/>`,
		"fallback": "coolicons:shovel-fill",
	});
}

export default Component;
