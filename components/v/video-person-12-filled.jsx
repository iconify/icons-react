import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vi9f19bku {
  fill: currentColor;
  d: path("M7.5 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M1 3.5A1.5 1.5 0 0 1 2.5 2h7A1.5 1.5 0 0 1 11 3.5v5A1.5 1.5 0 0 1 9.5 10h-7A1.5 1.5 0 0 1 1 8.5zM8 9h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H4v-.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z");
}
</style><path class="vi9f19bku"/>`,
		"fallback": "fluent:video-person-12-filled",
	});
}

export default Component;
