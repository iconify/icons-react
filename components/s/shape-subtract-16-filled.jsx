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
		"content": `<style>.pjwot1bjn {
  fill: currentColor;
  d: path("M3 2.268A2 2 0 0 0 2 4v5a2 2 0 0 0 .01.204A2.004 2.004 0 0 0 4 11h1v1a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-1 .268M6 7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z");
}
</style><path class="pjwot1bjn"/>`,
		"fallback": "fluent:shape-subtract-16-filled",
	});
}

export default Component;
