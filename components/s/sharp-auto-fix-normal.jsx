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
		"content": `<style>.mwn52fu0c {
  fill: currentColor;
  d: path("m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-1.59 2.83l-4.24-4.24L1.59 18.17l4.24 4.24zm-4.2 1.38L12.8 9.8l1.38-1.38l1.41 1.41z");
}
</style><path class="mwn52fu0c"/>`,
		"fallback": "ic:sharp-auto-fix-normal",
	});
}

export default Component;
