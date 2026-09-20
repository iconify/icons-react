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
		"content": `<style>.g6wlm7oix {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v3a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2H8a3 3 0 0 1-3-3V9a2 2 0 0 1-2-2z");
}
</style><path class="g6wlm7oix"/>`,
		"fallback": "fluent:row-child-20-filled",
	});
}

export default Component;
