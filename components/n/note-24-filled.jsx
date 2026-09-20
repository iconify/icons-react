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
		"content": `<style>.op8fp1oap {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25V13h-4.75A3.25 3.25 0 0 0 13 16.25V21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm2.81 11.5l-6.06 6.06v-4.31c0-.966.784-1.75 1.75-1.75z");
}
</style><path class="op8fp1oap"/>`,
		"fallback": "fluent:note-24-filled",
	});
}

export default Component;
