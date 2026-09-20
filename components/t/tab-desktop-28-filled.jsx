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
		"content": `<style>.ga3lqm5lz {
  fill: currentColor;
  d: path("M13 3v3.25A2.75 2.75 0 0 0 15.75 9H25v12.25A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3zm1.5 0v3.25c0 .69.56 1.25 1.25 1.25H25v-.75A3.75 3.75 0 0 0 21.25 3z");
}
</style><path class="ga3lqm5lz"/>`,
		"fallback": "fluent:tab-desktop-28-filled",
	});
}

export default Component;
