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
		"content": `<style>.yp33v4f3g {
  fill: currentColor;
  d: path("M20.25 5c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 0 0-.9 0C9.008 4.057 6.413 5 3.75 5a.75.75 0 0 0-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 0 0 .55 0C18.042 19.676 21 16 21 11V5.75a.75.75 0 0 0-.75-.75m-3.493 4.303l-6 5.5a.75.75 0 0 1-1.037-.023l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.993 1.992l5.47-5.015a.75.75 0 0 1 1.014 1.106");
}
</style><path class="yp33v4f3g"/>`,
		"fallback": "fluent:shield-task-24-filled",
	});
}

export default Component;
