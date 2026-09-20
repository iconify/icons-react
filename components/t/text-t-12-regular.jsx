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
		"content": `<style>.u_tahz86b {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V3H6v6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H5V3H3v1a.5.5 0 0 1-1 0z");
}
</style><path class="u_tahz86b"/>`,
		"fallback": "fluent:text-t-12-regular",
	});
}

export default Component;
