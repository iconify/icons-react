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
		"content": `<style>.s0vufrbry {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 0 0 2h26a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h26a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2z");
}
</style><path class="s0vufrbry"/>`,
		"fallback": "fluent:text-description-32-regular",
	});
}

export default Component;
