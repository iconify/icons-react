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
		"content": `<style>.uyhonei6b {
  fill: currentColor;
  d: path("M2 20V4h20v16zm4-4h8v-2H6zm10 0h2v-2h-2zM6 12h2v-2H6zm4 0h8v-2h-8z");
}
</style><path class="uyhonei6b"/>`,
		"fallback": "material-symbols:subtitles-sharp",
	});
}

export default Component;
