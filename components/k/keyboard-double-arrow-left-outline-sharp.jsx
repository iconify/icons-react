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
		"content": `<style>.zq8artkoq {
  fill: currentColor;
  d: path("M11.25 17.308L5.942 12l5.308-5.308l.708.708L7.364 12l4.594 4.6zm6.1 0L12.042 12l5.308-5.308l.708.708l-4.594 4.6l4.594 4.6z");
}
</style><path class="zq8artkoq"/>`,
		"fallback": "material-symbols-light:keyboard-double-arrow-left-outline-sharp",
	});
}

export default Component;
