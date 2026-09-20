import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vqm7o2-0p {
  fill: currentColor;
  d: path("M22.97 6.229a3.74 3.74 0 0 1 1.529 3.021v9a6.25 6.25 0 0 1-6.25 6.25h-9c-1.24 0-2.34-.602-3.022-1.53q.257.028.522.03h11.5a4.75 4.75 0 0 0 4.75-4.75V6.75q0-.264-.03-.521M8.5 22H6.75A3.75 3.75 0 0 1 3 18.25V16.5h5.5zm6.5 0h-5v-5.5h5zm7-3.75A3.75 3.75 0 0 1 18.25 22H16.5v-5.5H22zM8.5 15H3v-5h5.5zm6.5 0h-5v-5h5zm7 0h-5.5v-5H22zM8.5 8.5H3V6.75A3.75 3.75 0 0 1 6.75 3H8.5zm6.5 0h-5V3h5zM18.25 3A3.75 3.75 0 0 1 22 6.75V8.5h-5.5V3z");
}
</style><path class="vqm7o2-0p"/>`,
		"fallback": "fluent:table-multiple-28-filled",
	});
}

export default Component;
