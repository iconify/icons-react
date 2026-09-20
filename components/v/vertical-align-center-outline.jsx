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
		"content": `<style>.twp7rymwc {
  fill: currentColor;
  d: path("M11 22v-4.2l-1.6 1.6L8 18l4-4l4 4l-1.4 1.4l-1.6-1.6V22zm-7-9v-2h16v2zm8-3L8 6l1.4-1.4L11 6.2V2h2v4.2l1.6-1.6L16 6z");
}
</style><path class="twp7rymwc"/>`,
		"fallback": "material-symbols:vertical-align-center-outline",
	});
}

export default Component;
