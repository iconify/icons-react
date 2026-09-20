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
		"content": `<style>.pcascibmi {
  fill: currentColor;
  d: path("M9 5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="pcascibmi"/>`,
		"fallback": "fluent:text-column-one-narrow-24-filled",
	});
}

export default Component;
