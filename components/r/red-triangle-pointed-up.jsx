import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m-7l8cc2z {
  fill: var(--svg-color--e75a70, #e75a70);
  d: path("M19.146 7.639c-.63-.901-1.637-.884-2.236.038L6.09 24.323C5.491 25.245 5.9 26 7 26h23c1.1 0 1.483-.737.854-1.639z");
}
</style><path class="m-7l8cc2z"/>`,
		"fallback": "twemoji:red-triangle-pointed-up",
	});
}

export default Component;
