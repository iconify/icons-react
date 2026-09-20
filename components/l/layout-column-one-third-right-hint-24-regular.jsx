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
		"content": `<style>.sz-vajkif {
  fill: currentColor;
  d: path("M4.5 6.25c0-.966.784-1.75 1.75-1.75a.75.75 0 0 0 0-1.5A3.25 3.25 0 0 0 3 6.25a.75.75 0 0 0 1.5 0M9.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM4.5 9.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 8a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 0 6.25 21a.75.75 0 0 0 0-1.5a1.75 1.75 0 0 1-1.75-1.75m5.25 1.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm5-16.5a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h3A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm.75 16.5v-15h2.25c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75z");
}
</style><path class="sz-vajkif"/>`,
		"fallback": "fluent:layout-column-one-third-right-hint-24-regular",
	});
}

export default Component;
