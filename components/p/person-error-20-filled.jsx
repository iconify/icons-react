import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sh9s3hb5t {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-4.243 1A5.48 5.48 0 0 0 9 14.5c0 1.303.454 2.5 1.21 3.442Q9.617 18 9 18c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13c0-1.113.903-2 2.009-2zm4.243 4.875a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0-3.875a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M9 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8");
}
</style><path class="sh9s3hb5t"/>`,
		"fallback": "fluent:person-error-20-filled",
	});
}

export default Component;
