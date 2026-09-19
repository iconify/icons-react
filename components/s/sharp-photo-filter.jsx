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
		"content": `<style>.x6877yhme {
  fill: currentColor;
  d: path("M19 10v9H4.98V5h9V3H3v18h18V10zm-2 0l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z");
}
</style><path class="x6877yhme"/>`,
		"fallback": "ic:sharp-photo-filter",
	});
}

export default Component;
