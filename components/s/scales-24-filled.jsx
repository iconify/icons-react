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
		"content": `<style>.yoi-jpbic {
  fill: currentColor;
  d: path("M3.75 3a.75.75 0 0 0 0 1.5h1.042l-2.737 6.717A.8.8 0 0 0 2 11.5a3.5 3.5 0 1 0 7 0a.8.8 0 0 0-.055-.283L6.208 4.5h5.042v12H7.253a2.25 2.25 0 0 0 0 4.5h9.497a2.25 2.25 0 0 0 0-4.5h-4v-12h5.042l-2.737 6.717A.8.8 0 0 0 15 11.5a3.5 3.5 0 1 0 7 0a.8.8 0 0 0-.055-.283L19.208 4.5h1.042a.75.75 0 0 0 0-1.5zM5.5 6.738l1.635 4.012h-3.27zm11.365 4.012L18.5 6.738l1.635 4.012z");
}
</style><path class="yoi-jpbic"/>`,
		"fallback": "fluent:scales-24-filled",
	});
}

export default Component;
