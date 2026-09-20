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
		"content": `<style>.gm-0eac0u {
  fill: currentColor;
  d: path("M6 19a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v15a1 1 0 0 1-1 1m12-4a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1m-7 6a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0z");
}
</style><path class="gm-0eac0u"/>`,
		"fallback": "fluent:text-align-right-rotate-270-24-filled",
	});
}

export default Component;
