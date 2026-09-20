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
		"content": `<style>.owawukbcd {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM19.5 8.5H9.25a.75.75 0 0 0-.75.75V19.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zM14 10v4h-4v-4zm1.5 4v-4h4v4zM14 15.5v4h-4v-4zm1.5 4v-4h4v2.25a1.75 1.75 0 0 1-1.75 1.75z");
}
</style><path class="owawukbcd"/>`,
		"fallback": "fluent:table-freeze-24-regular",
	});
}

export default Component;
