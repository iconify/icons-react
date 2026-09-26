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
		"content": `<style>.oih-iybge {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 5H16C19.866 5 23 8.13401 23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5ZM19 12C19 13.6568 17.6568 15 16 15C14.3432 15 13 13.6568 13 12C13 10.3432 14.3432 9 16 9C17.6568 9 19 10.3432 19 12Z");
}
</style><path clip-rule="evenodd" class="oih-iybge"/>`,
		"fallback": "keyline-icons:toggle-on-fill",
	});
}

export default Component;
