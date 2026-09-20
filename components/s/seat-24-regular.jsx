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
		"content": `<style>.owxxjwbpg {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v12.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V6.25A3.25 3.25 0 0 0 17.75 3zm13.25 8.627a3.5 3.5 0 0 0-2-.627c-1.116 0-2.11.522-2.75 1.335A3.5 3.5 0 0 0 12 11c-1.116 0-2.11.522-2.75 1.335A3.5 3.5 0 0 0 6.5 11c-.744 0-1.433.232-2 .627V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zM14 14.5v5h-4v-5a2 2 0 1 1 4 0m1.5 5v-5a2 2 0 1 1 4 0v4.25a.75.75 0 0 1-.75.75zm-10.25 0a.75.75 0 0 1-.75-.75V14.5a2 2 0 1 1 4 0v5z");
}
</style><path class="owxxjwbpg"/>`,
		"fallback": "fluent:seat-24-regular",
	});
}

export default Component;
