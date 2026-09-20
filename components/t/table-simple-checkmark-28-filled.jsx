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
		"content": `<style>.zoa7y9b5h {
  fill: currentColor;
  d: path("M6.75 3h6.5v10.25H3v-6.5A3.75 3.75 0 0 1 6.75 3M3 14.75h10.25V25h-6.5A3.75 3.75 0 0 1 3 21.25zm11.75 0V25h6.5A3.75 3.75 0 0 0 25 21.25v-6.5zm0-11.75v10.25H25v-6.5A3.75 3.75 0 0 0 21.25 3zm8.028 15.78l-3 3a.75.75 0 0 1-1.06 0l-1.498-1.498a.75.75 0 0 1 1.06-1.06l.968.967l2.47-2.47a.75.75 0 0 1 1.06 1.061");
}
</style><path class="zoa7y9b5h"/>`,
		"fallback": "fluent:table-simple-checkmark-28-filled",
	});
}

export default Component;
