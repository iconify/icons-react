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
		"content": `<style>.of_a7j29t {
  fill: currentColor;
  d: path("M13 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m12-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z");
}
</style><path class="of_a7j29t"/>`,
		"fallback": "fluent:text-align-justify-low-24-filled",
	});
}

export default Component;
