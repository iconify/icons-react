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
		"content": `<style>.fgsfpkbsz {
  fill: currentColor;
  d: path("M9.992 18.93q-.877-.876-.877-2.122q0-1.247.882-2.124q.881-.876 2.119-.876q.575 0 1.09.204t.91.615V4.192H19v2.539h-3.884v10.077q0 1.237-.877 2.118t-2.124.882t-2.123-.877m-2.761-7.739v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="fgsfpkbsz"/>`,
		"fallback": "material-symbols-light:music-note-add-outline",
	});
}

export default Component;
