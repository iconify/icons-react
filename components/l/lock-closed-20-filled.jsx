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
		"content": `<style>.oxhym2qyd {
  fill: currentColor;
  d: path("M10 1a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-6a2.5 2.5 0 0 1 2-2.45V5a4 4 0 0 1 4-4m0 10.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M10 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3");
}
</style><path class="oxhym2qyd"/>`,
		"fallback": "fluent:lock-closed-20-filled",
	});
}

export default Component;
