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
		"content": `<style>.wu1vs1qdg {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM7.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2a.5.5 0 0 0-.5.5V13H4.5a.5.5 0 0 0 0 1H7v2.5a.5.5 0 0 0 1 0V14h2.5a.5.5 0 0 0 0-1H8v-2.5a.5.5 0 0 0-.5-.5M25 16a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z");
}
</style><path class="wu1vs1qdg"/>`,
		"fallback": "fluent:text-expand-28-filled",
	});
}

export default Component;
