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
		"content": `<style>.jj4lf-ndj {
  fill: currentColor;
  d: path("M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><path class="jj4lf-ndj"/>`,
		"fallback": "fluent:subtract-circle-12-regular",
	});
}

export default Component;
