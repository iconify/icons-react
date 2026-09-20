import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.en0yuikex {
  fill: currentColor;
  d: path("M15.506 5A2.5 2.5 0 0 0 14.5 7h-8A2.5 2.5 0 0 0 4 9.5v.902l12 6.462l6.247-3.364h4.219l-9.992 5.38a1 1 0 0 1-.949 0L4 12.675V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-9h2v9a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5zM30 10a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H17a1 1 0 1 1 0-2z");
}
</style><path class="en0yuikex"/>`,
		"fallback": "fluent:mail-list-32-regular",
	});
}

export default Component;
