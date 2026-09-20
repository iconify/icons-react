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
		"content": `<style>.u_m0wkp7y {
  fill: currentColor;
  d: path("M18 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M6 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z");
}
</style><path class="u_m0wkp7y"/>`,
		"fallback": "fluent:text-align-justify-rotate-90-24-filled",
	});
}

export default Component;
