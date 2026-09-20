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
		"content": `<style>.x9gt9bbup {
  fill: currentColor;
  d: path("M13.5 15a2.5 2.5 0 0 0 2.5-2.5v-7q0-.14-.015-.277A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7q0 .26.05.504A2.5 2.5 0 0 0 4.485 15zm-8-9h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m0 2.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m-.5 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="x9gt9bbup"/>`,
		"fallback": "fluent:slide-text-multiple-20-filled",
	});
}

export default Component;
