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
		"content": `<style>.hkc101eua {
  fill: currentColor;
  d: path("m12 16l4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 13l4-4h-3V3h-2v9H8zM23 3h-8v1.99h6v14.03H3V4.99h6V3H1v18h22z");
}
</style><path class="hkc101eua"/>`,
		"fallback": "ic:sharp-system-update-alt",
	});
}

export default Component;
