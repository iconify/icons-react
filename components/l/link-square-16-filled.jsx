import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-j2hdcrw {
  fill: currentColor;
  d: path("M2 4.25A2.25 2.25 0 0 1 4.25 2h3.5A2.25 2.25 0 0 1 10 4.25v3.5a2.25 2.25 0 0 1-1.5 2.122V4.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75H5V10h-.75A2.25 2.25 0 0 1 2 7.75zm4 7.5A2.25 2.25 0 0 0 8.25 14h3.5A2.25 2.25 0 0 0 14 11.75v-3.5A2.25 2.25 0 0 0 11.75 6H11v1.5h.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V6.128A2.25 2.25 0 0 0 6 8.25z");
}
</style><path class="r-j2hdcrw"/>`,
		"fallback": "fluent:link-square-16-filled",
	});
}

export default Component;
