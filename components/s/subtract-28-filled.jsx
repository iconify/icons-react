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
		"content": `<style>.nypwwpbja {
  fill: currentColor;
  d: path("M3 14a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1");
}
</style><path class="nypwwpbja"/>`,
		"fallback": "fluent:subtract-28-filled",
	});
}

export default Component;
