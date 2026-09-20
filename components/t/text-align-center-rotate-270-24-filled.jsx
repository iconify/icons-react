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
		"content": `<style>.q4s5b6bua {
  fill: currentColor;
  d: path("M6 20a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1m12-2a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1m-7 3a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0z");
}
</style><path class="q4s5b6bua"/>`,
		"fallback": "fluent:text-align-center-rotate-270-24-filled",
	});
}

export default Component;
