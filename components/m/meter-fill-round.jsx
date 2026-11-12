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
		"content": `<style>.q5w6tdb0y {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 2 0a5 5 0 0 1 5 5v9a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5a1 1 0 0 1 2 0ZM7 7v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m4 0v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m4 0v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m1 9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="q5w6tdb0y"/>`,
		"fallback": "coolicons:meter-fill-round",
	});
}

export default Component;
