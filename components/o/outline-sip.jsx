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
		"content": `<style>.sz64m-xus {
  fill: currentColor;
  d: path("M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2m0 2v12h16V6zm7 3h2v6h-2zm3 0h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm3.5 1.5h-2v1h2zm-11 .75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5z");
}
</style><path class="sz64m-xus"/>`,
		"fallback": "ic:outline-sip",
	});
}

export default Component;
