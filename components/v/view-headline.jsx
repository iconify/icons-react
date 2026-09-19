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
		"content": `<style>.sqduyhbgk {
  fill: currentColor;
  d: path("M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z");
}
</style><path class="sqduyhbgk"/>`,
		"fallback": "ic:view-headline",
	});
}

export default Component;
