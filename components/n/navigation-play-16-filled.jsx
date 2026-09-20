import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.od020h1pc {
  fill: currentColor;
  d: path("M11.5 6a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-5.477 5c.048.525.17 1.028.354 1.5H2.75a.75.75 0 0 1 0-1.5zm4.734-2.428a.5.5 0 0 0-.757.429v2.994a.5.5 0 0 0 .757.429l2.5-1.497a.5.5 0 0 0 0-.858zM7.257 7a5.5 5.5 0 0 0-.88 1.5H2.75a.75.75 0 0 1 0-1.5zm5.993-4a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="od020h1pc"/>`,
		"fallback": "fluent:navigation-play-16-filled",
	});
}

export default Component;
