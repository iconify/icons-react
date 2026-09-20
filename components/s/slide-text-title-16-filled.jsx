import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lw54sdbiu {
  fill: currentColor;
  d: path("M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 3h6a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2");
}
</style><path class="lw54sdbiu"/>`,
		"fallback": "fluent:slide-text-title-16-filled",
	});
}

export default Component;
