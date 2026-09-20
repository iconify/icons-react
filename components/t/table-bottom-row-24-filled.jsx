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
		"content": `<style>.xbj50_i5u {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v8.25h1.5V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v8.25H21V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 20.49A3.26 3.26 0 0 1 3 17.75V16h5v5H6.25a3.24 3.24 0 0 1-1.75-.51m16.413-1.99q.086-.361.087-.75V16h-5v5h1.75c.644 0 1.245-.187 1.75-.51a3.26 3.26 0 0 0 1.413-1.99M14.5 21v-5h-5v5z");
}
</style><path class="xbj50_i5u"/>`,
		"fallback": "fluent:table-bottom-row-24-filled",
	});
}

export default Component;
