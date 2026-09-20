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
		"content": `<style>.f5yt31v3m {
  fill: currentColor;
  d: path("M8 18v-3.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V18zm2-2h4v-2.3l.85-.6q1.025-.7 1.588-1.787T17 9q0-2.075-1.463-3.537T12 4T8.463 5.463T7 9q0 1.225.563 2.313T9.15 13.1l.85.6zm-1 6v-2h6v2zm3-13");
}
</style><path class="f5yt31v3m"/>`,
		"fallback": "material-symbols:lightbulb-2-outline-sharp",
	});
}

export default Component;
