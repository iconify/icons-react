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
		"content": `<style>.bm8qffoxq {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2 16l-7-8v8H5l7-8V5h7z");
}
</style><path class="bm8qffoxq"/>`,
		"fallback": "ic:sharp-filter-b-and-w",
	});
}

export default Component;
