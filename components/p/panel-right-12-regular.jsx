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
		"content": `<style>.el_va8b8t {
  fill: currentColor;
  d: path("M9 2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M2 8V4a1 1 0 0 1 1-1h4v6H3a1 1 0 0 1-1-1m8 0a1 1 0 0 1-1 1H8V3h1a1 1 0 0 1 1 1z");
}
</style><path class="el_va8b8t"/>`,
		"fallback": "fluent:panel-right-12-regular",
	});
}

export default Component;
