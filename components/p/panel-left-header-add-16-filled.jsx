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
		"content": `<style>.yg0v7rb2w {
  fill: currentColor;
  d: path("M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H6V6.5h7v-2A2.5 2.5 0 0 0 10.5 2zM12 5.5H6V3h4.5A1.5 1.5 0 0 1 12 4.5zM11.5 16a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m.5-6.5a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="yg0v7rb2w"/>`,
		"fallback": "fluent:panel-left-header-add-16-filled",
	});
}

export default Component;
