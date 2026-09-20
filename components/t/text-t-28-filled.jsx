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
		"content": `<style>.n8rjm4blg {
  fill: currentColor;
  d: path("M5 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6h-6v16h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V6H7v2a1 1 0 0 1-2 0z");
}
</style><path class="n8rjm4blg"/>`,
		"fallback": "fluent:text-t-28-filled",
	});
}

export default Component;
