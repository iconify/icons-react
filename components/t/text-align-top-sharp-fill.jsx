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
		"content": `<style>.jp_7kvgoi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM6 6L6 8L18 8L18 6ZM6 10L6 12L14 12L14 10Z");
}
</style><path clip-rule="evenodd" class="jp_7kvgoi"/>`,
		"fallback": "keyline-icons:text-align-top-sharp-fill",
	});
}

export default Component;
