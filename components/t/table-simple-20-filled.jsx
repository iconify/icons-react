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
		"content": `<style>.m3g5yzbwz {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5z");
}
</style><path class="m3g5yzbwz"/>`,
		"fallback": "fluent:table-simple-20-filled",
	});
}

export default Component;
