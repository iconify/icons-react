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
		"content": `<style>.yhaqh90io {
  fill: currentColor;
  d: path("M11.25 11.25V3h-5A3.25 3.25 0 0 0 3 6.25v5zm1.5 0H21v-5A3.25 3.25 0 0 0 17.75 3h-5zm8.25 1.5H3v5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75z");
}
</style><path class="yhaqh90io"/>`,
		"fallback": "fluent:layout-row-two-split-top-24-filled",
	});
}

export default Component;
