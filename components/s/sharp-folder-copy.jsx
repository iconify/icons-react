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
		"content": `<style>.h1vmt1quk {
  fill: currentColor;
  d: path("M23 4h-9l-2-2H5.01L5 17h18z");
}

.mu6d72pit {
  fill: currentColor;
  d: path("M3 6H1v15h19v-2H3z");
}
</style><path class="mu6d72pit"/><path class="h1vmt1quk"/>`,
		"fallback": "ic:sharp-folder-copy",
	});
}

export default Component;
