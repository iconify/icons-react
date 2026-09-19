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
		"content": `<style>.r9944-b2a {
  fill: currentColor;
  d: path("M19 10v9H4.98V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9zm-2.94-2.06L17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7zM12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z");
}
</style><path class="r9944-b2a"/>`,
		"fallback": "ic:twotone-photo-filter",
	});
}

export default Component;
