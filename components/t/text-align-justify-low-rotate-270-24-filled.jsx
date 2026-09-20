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
		"content": `<style>.w-i27gbgz {
  fill: currentColor;
  d: path("M6 11a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1m12 11a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v18a1 1 0 0 1-1 1m-7-12a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0z");
}
</style><path class="w-i27gbgz"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-270-24-filled",
	});
}

export default Component;
