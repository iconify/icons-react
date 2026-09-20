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
		"content": `<style>.oz6xuub3k {
  fill: currentColor;
  d: path("M9.5 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.5 16H3.75A1.75 1.75 0 0 1 2 14.25v-4.5a1.75 1.75 0 0 1 1.606-1.744L3.75 8zm10.75 0c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 20.25 16H14.5a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75z");
}
</style><path class="oz6xuub3k"/>`,
		"fallback": "fluent:match-app-layout-24-filled",
	});
}

export default Component;
