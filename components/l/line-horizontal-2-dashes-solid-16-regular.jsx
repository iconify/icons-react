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
		"content": `<style>.durhuiblv {
  fill: currentColor;
  d: path("M2.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-9 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="durhuiblv"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-16-regular",
	});
}

export default Component;
