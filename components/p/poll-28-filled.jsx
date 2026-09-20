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
		"content": `<style>.vefku16ux {
  fill: currentColor;
  d: path("M6 13a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0v-6a3 3 0 0 1 3-3m8-10a3 3 0 0 1 3 3v16a3 3 0 1 1-6 0V6a3 3 0 0 1 3-3m8 5a3 3 0 0 1 3 3v11a3 3 0 1 1-6 0V11a3 3 0 0 1 3-3");
}
</style><path class="vefku16ux"/>`,
		"fallback": "fluent:poll-28-filled",
	});
}

export default Component;
