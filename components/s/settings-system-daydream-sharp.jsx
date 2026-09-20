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
		"content": `<style>.ubojjgnen {
  fill: currentColor;
  d: path("M9 16h6.5q1.05 0 1.775-.725T18 13.5t-.725-1.775T15.5 11h-.05q-.2-1.275-1.113-2.137T12.15 8q-1.05 0-1.95.525T8.85 10h-.125q-1.175 0-1.95.9T6 13q0 1.25.875 2.125T9 16m-7 4V4h20v16z");
}
</style><path class="ubojjgnen"/>`,
		"fallback": "material-symbols:settings-system-daydream-sharp",
	});
}

export default Component;
