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
		"content": `<style>.vq8sxnw0h {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="vq8sxnw0h"/>`,
		"fallback": "fluent:tv-20-filled",
	});
}

export default Component;
