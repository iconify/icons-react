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
		"content": `<style>.lhzzi9r-f {
  fill: currentColor;
  d: path("M7.935 18.93q-.877-.876-.877-2.122q0-1.247.876-2.124q.877-.876 2.124-.876q.575 0 1.091.204q.517.205.909.615V4.192h4.884v2.539h-3.884v10.077q0 1.246-.877 2.123t-2.123.877q-1.247 0-2.124-.877");
}
</style><path class="lhzzi9r-f"/>`,
		"fallback": "material-symbols-light:music-note-outline",
	});
}

export default Component;
