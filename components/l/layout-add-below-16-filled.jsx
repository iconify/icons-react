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
		"content": `<style>.vc7c46blj {
  fill: currentColor;
  d: path("M13.5 13a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-2-11A2.5 2.5 0 0 1 14 4.5v5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-5A2.5 2.5 0 0 1 4.5 2z");
}
</style><path class="vc7c46blj"/>`,
		"fallback": "fluent:layout-add-below-16-filled",
	});
}

export default Component;
