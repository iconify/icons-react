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
		"content": `<style>.jzlfvfbvr {
  fill: currentColor;
  d: path("M16.102 17.162a8 8 0 1 1 1.06-1.06l4.618 4.618a.75.75 0 1 1-1.06 1.06zM17.5 11a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0");
}
</style><path class="jzlfvfbvr"/>`,
		"fallback": "fluent:search-24-regular",
	});
}

export default Component;
