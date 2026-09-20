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
		"content": `<style>.k6o2k-b6a {
  fill: currentColor;
  d: path("M3 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm7.5 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zM18 5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1.5 5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3z");
}
</style><path class="k6o2k-b6a"/>`,
		"fallback": "fluent:line-style-24-filled",
	});
}

export default Component;
