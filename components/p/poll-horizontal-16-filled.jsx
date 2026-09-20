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
		"content": `<style>.bupg7kupl {
  fill: currentColor;
  d: path("M13 6a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zM7 1a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zm2 10a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4z");
}
</style><path class="bupg7kupl"/>`,
		"fallback": "fluent:poll-horizontal-16-filled",
	});
}

export default Component;
