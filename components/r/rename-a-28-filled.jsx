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
		"content": `<style>.q5j24l8zb {
  fill: currentColor;
  d: path("M20.25 2a.75.75 0 0 1 0 1.5h-1.752v21h1.752a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.748v-21H15.25a.75.75 0 0 1 0-1.5zm-9.6 12h-3.3L9 10.505zm5.348 9H5.75A3.75 3.75 0 0 1 2 19.25V8.75A3.75 3.75 0 0 1 5.75 5h10.248zM9 8a.75.75 0 0 0-.625.336l-.053.094l-4.25 9a.75.75 0 1 0 1.356.64l1.214-2.57h4.716l1.214 2.57a.75.75 0 1 0 1.356-.64l-4.25-9A.75.75 0 0 0 9 8m13.25-3A3.75 3.75 0 0 1 26 8.75v10.5A3.75 3.75 0 0 1 22.25 23h-2.752V5z");
}
</style><path class="q5j24l8zb"/>`,
		"fallback": "fluent:rename-a-28-filled",
	});
}

export default Component;
