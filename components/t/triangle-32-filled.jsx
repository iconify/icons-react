import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s2eae3bar {
  fill: currentColor;
  d: path("M18.847 4.684c-1.235-2.242-4.457-2.243-5.693-.001L2.404 24.18C1.21 26.346 2.777 29 5.251 29h21.492c2.473 0 4.04-2.653 2.846-4.819z");
}
</style><path class="s2eae3bar"/>`,
		"fallback": "fluent:triangle-32-filled",
	});
}

export default Component;
