import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oxj-t0b0a {
  fill: currentColor;
  d: path("M2 12a8 8 0 0 1 8-8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-8-8");
}
</style><path class="oxj-t0b0a"/>`,
		"fallback": "fluent:oval-24-filled",
	});
}

export default Component;
