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
		"content": `<style>.kywmolbku {
  fill: currentColor;
  d: path("M25 18a1 1 0 0 1 1 1v6.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L24 25.586V19a1 1 0 0 1 1-1m-11 6a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm5-9a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm5.37-11.775a1 1 0 0 1 1.337.068l3 3a1 1 0 0 1-1.414 1.414L26 6.414V13a1 1 0 0 1-2 0V6.414l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3zM14 6a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z");
}
</style><path class="kywmolbku"/>`,
		"fallback": "fluent:text-line-spacing-32-regular",
	});
}

export default Component;
