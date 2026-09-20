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
		"content": `<style>.nfgqqj3ms {
  fill: currentColor;
  d: path("M10.5 1A1.5 1.5 0 0 1 12 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5v-11A1.5 1.5 0 0 1 5.5 1zM5 12.5h3.5a.5.5 0 0 0 0-1H5zM5 10h2.5a.5.5 0 0 0 0-1H5zm0-2.5h3.5a.5.5 0 0 0 0-1H5zM5 5h2.5a.5.5 0 0 0 0-1H5z");
}
</style><path class="nfgqqj3ms"/>`,
		"fallback": "fluent:ruler-16-filled",
	});
}

export default Component;
