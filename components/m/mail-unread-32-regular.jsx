import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sdb_js29q {
  fill: currentColor;
  d: path("M27 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8M6.5 5h15.09a5.5 5.5 0 0 0 0 2H6.5A2.5 2.5 0 0 0 4 9.5v.903l12 6.461l10.1-5.437q.44.073.901.073a5.47 5.47 0 0 0 3-.89V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5M4 12.674V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-9.826l-11.526 6.207a1 1 0 0 1-.948 0z");
}
</style><path class="sdb_js29q"/>`,
		"fallback": "fluent:mail-unread-32-regular",
	});
}

export default Component;
