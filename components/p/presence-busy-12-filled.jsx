import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m0oajvfgn {
  fill: currentColor;
  d: path("M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0");
}
</style><path class="m0oajvfgn"/>`,
		"fallback": "fluent:presence-busy-12-filled",
	});
}

export default Component;
