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
		"content": `<style>.mr0iktbov {
  fill: currentColor;
  d: path("M8 17h7.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8zm0-5h7.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H8zM7 8v4H4.5A1.5 1.5 0 0 1 3 10.5v-1A1.5 1.5 0 0 1 4.5 8zm1-1h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8zM7 3v4H4.5A1.5 1.5 0 0 1 3 5.5v-1A1.5 1.5 0 0 1 4.5 3zm0 10v4H4.5A1.5 1.5 0 0 1 3 15.5v-1A1.5 1.5 0 0 1 4.5 13z");
}
</style><path class="mr0iktbov"/>`,
		"fallback": "fluent:list-bar-20-filled",
	});
}

export default Component;
