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
		"content": `<style>.somyfnb7j {
  fill: currentColor;
  d: path("M14.95 5a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h7.55a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1zM12.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-2.55 7a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h2.55a2.5 2.5 0 0 0 4.9 0h7.55a.5.5 0 0 0 0-1zM7.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="somyfnb7j"/>`,
		"fallback": "fluent:options-20-regular",
	});
}

export default Component;
