import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sntbf5bno {
  fill: currentColor;
  d: path("M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3 1a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="sntbf5bno"/>`,
		"fallback": "fluent:slide-text-title-16-regular",
	});
}

export default Component;
