import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p4ey1w_7f {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.5 3a7.5 7.5 0 0 1 7.5 7.5a.5.5 0 0 1-1 0A6.5 6.5 0 0 0 6.5 7a.5.5 0 0 1 0-1M6 9.5a.5.5 0 0 1 .5-.5a4.5 4.5 0 0 1 4.5 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5M7 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="p4ey1w_7f"/>`,
		"fallback": "fluent:rss-20-filled",
	});
}

export default Component;
