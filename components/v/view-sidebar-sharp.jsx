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
		"content": `<style>.t27c6cbvb {
  fill: currentColor;
  d: path("M18 8V4h4v4zm0 6v-4h4v4zM2 20V4h14v16zm16 0v-4h4v4z");
}
</style><path class="t27c6cbvb"/>`,
		"fallback": "material-symbols:view-sidebar-sharp",
	});
}

export default Component;
