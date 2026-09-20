import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ga2f77buq {
  fill: currentColor;
  d: path("M201.21 128L231 76a8 8 0 0 0-7-12h-59.35L135 12a8 8 0 0 0-13.9 0L91.33 64H32a8 8 0 0 0-6.95 12l29.72 52l-29.72 52a8 8 0 0 0 7 12h59.28l29.72 52a8 8 0 0 0 13.9 0l29.7-52H224a8 8 0 0 0 7-12Zm-18.42 0l-27.42 48h-54.75L73.2 128l27.42-48h54.75Z");
}
</style><path class="ga2f77buq"/>`,
		"fallback": "ph:star-of-david-fill",
	});
}

export default Component;
