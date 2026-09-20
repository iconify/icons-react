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
		"content": `<style>.ymx-9dbbr {
  fill: currentColor;
  d: path("M2.5 3.668V2.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 2 6h2.5a.5.5 0 0 0 0-1H2.802a6 6 0 1 1-.782 3.5a.534.534 0 0 0-.52-.5a.474.474 0 0 0-.483.5A7 7 0 1 0 2.5 3.668M6 6.001a1 1 0 0 1 1.496-.868l3.498 2a1 1 0 0 1 0 1.736l-3.498 1.999A1 1 0 0 1 6 10zm4.498 2L7 6v4z");
}
</style><path class="ymx-9dbbr"/>`,
		"fallback": "fluent:replay-16-regular",
	});
}

export default Component;
