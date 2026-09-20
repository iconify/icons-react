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
		"content": `<style>.mei7yio7x {
  fill: currentColor;
  d: path("M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0c0-1.296-.41-2.496-1.11-3.477l-8.367 8.368A6 6 0 0 0 14 8m-2.524-4.89a6 6 0 0 0-8.367 8.367z");
}
</style><path class="mei7yio7x"/>`,
		"fallback": "fluent:presence-blocked-16-regular",
	});
}

export default Component;
