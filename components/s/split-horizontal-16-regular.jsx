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
		"content": `<style>.b-th3ib7g {
  fill: currentColor;
  d: path("M14.5 8a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM3 6h1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h1V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm0 6V9h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9h1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2");
}
</style><path class="b-th3ib7g"/>`,
		"fallback": "fluent:split-horizontal-16-regular",
	});
}

export default Component;
