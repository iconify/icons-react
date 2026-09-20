import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j60g64bkg {
  fill: currentColor;
  d: path("M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-5 1v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m-3 0v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0");
}
</style><path class="j60g64bkg"/>`,
		"fallback": "fluent:textbox-align-middle-rotate-90-20-filled",
	});
}

export default Component;
