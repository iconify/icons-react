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
		"content": `<style>.zwslv-b4q {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 12a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m7-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4.5 12a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M5 6.5a.5.5 0 0 0-1 0V8H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1H5z");
}
</style><path class="zwslv-b4q"/>`,
		"fallback": "fluent:text-expand-16-regular",
	});
}

export default Component;
