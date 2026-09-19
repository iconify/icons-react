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
		"content": `<style>.fke3nsb4z {
  fill: currentColor;
  d: path("M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z");
}

.hexsfe7at {
  fill: currentColor;
  d: path("M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1z");
}
</style><path class="fke3nsb4z"/><path class="hexsfe7at"/>`,
		"fallback": "ic:sharp-18-up-rating",
	});
}

export default Component;
