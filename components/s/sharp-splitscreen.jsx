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
		"content": `<style>.x6r1jbnmo {
  fill: currentColor;
  d: path("M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z");
}
</style><path class="x6r1jbnmo"/>`,
		"fallback": "ic:sharp-splitscreen",
	});
}

export default Component;
