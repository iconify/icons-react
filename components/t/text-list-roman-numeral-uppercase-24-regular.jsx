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
		"content": `<style>.j4fk81s3u {
  fill: currentColor;
  d: path("M6 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zM5.25 16a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m4.5-11a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="j4fk81s3u"/>`,
		"fallback": "fluent:text-list-roman-numeral-uppercase-24-regular",
	});
}

export default Component;
