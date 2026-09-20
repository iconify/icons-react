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
		"content": `<style>.hww2wtbub {
  d: path("M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3zm0 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM10 4a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="hww2wtbub"/>`,
		"fallback": "fluent:lock-20-filled",
	});
}

export default Component;
