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
		"content": `<style>.dpnaw-32d {
  fill: currentColor;
  d: path("M18 5.433c0-1.398-1.742-2.036-2.645-.97l-4.086 4.83A2 2 0 0 1 9.743 10H6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3.743a2 2 0 0 1 1.526.708l4.086 4.829c.902 1.066 2.645.428 2.645-.97z");
}
</style><path class="dpnaw-32d"/>`,
		"fallback": "fluent:speaker-0-32-filled",
	});
}

export default Component;
