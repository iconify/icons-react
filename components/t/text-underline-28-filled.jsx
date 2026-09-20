import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z-y35lbrx {
  fill: currentColor;
  d: path("M20 22a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM19 4a1 1 0 0 1 1 1v9a6 6 0 0 1-12 0V5a1 1 0 0 1 2 0v9a4 4 0 0 0 8 0V5a1 1 0 0 1 1-1");
}
</style><path class="z-y35lbrx"/>`,
		"fallback": "fluent:text-underline-28-filled",
	});
}

export default Component;
