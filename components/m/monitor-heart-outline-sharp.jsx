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
		"content": `<style>.jmo0v4bgs {
  fill: currentColor;
  d: path("M2 9V4h20v5h-2V6H4v3zm0 11v-5h2v3h16v-3h2v5zm5.375-7l1.95 3.9h1.35L14 10.25L15.375 13H22v-2h-5.375l-1.95-3.9h-1.35L10 13.75L8.625 11H2v2zM12 12");
}
</style><path class="jmo0v4bgs"/>`,
		"fallback": "material-symbols:monitor-heart-outline-sharp",
	});
}

export default Component;
