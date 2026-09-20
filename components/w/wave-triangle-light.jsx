import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.msdpiacfb {
  fill: currentColor;
  d: path("m236.86 131.51l-52 72a6 6 0 0 1-9.72 0L76 66.25l-47.14 65.26a6 6 0 1 1-9.72-7l52-72a6 6 0 0 1 9.72 0L180 189.75l47.14-65.26a6 6 0 0 1 9.72 7Z");
}
</style><path class="msdpiacfb"/>`,
		"fallback": "ph:wave-triangle-light",
	});
}

export default Component;
