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
		"content": `<style>.hc2388bpq {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h8.25v-5h-5v3.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V9.5H16v5h5V6.25A3.25 3.25 0 0 0 17.75 3zM16 16v5h1.75A3.25 3.25 0 0 0 21 17.75V16zm-1.5-1.5v-5h-5v5z");
}
</style><path class="hc2388bpq"/>`,
		"fallback": "fluent:table-freeze-column-and-row-24-filled",
	});
}

export default Component;
