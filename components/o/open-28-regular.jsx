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
		"content": `<style>.a__5ofbir {
  fill: currentColor;
  d: path("M7.25 4.5A2.75 2.75 0 0 0 4.5 7.25v13.5a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75v-4.5a.75.75 0 0 1 1.5 0v4.5A4.25 4.25 0 0 1 20.75 25H7.25A4.25 4.25 0 0 1 3 20.75V7.25A4.25 4.25 0 0 1 7.25 3h4.5a.75.75 0 0 1 0 1.5zm8.25-.75a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V5.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22h-6.19a.75.75 0 0 1-.75-.75");
}
</style><path class="a__5ofbir"/>`,
		"fallback": "fluent:open-28-regular",
	});
}

export default Component;
