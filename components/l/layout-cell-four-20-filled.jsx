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
		"content": `<style>.dhe1kmyoh {
  fill: currentColor;
  d: path("M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3m3-7.5h-6.5V3H14a3 3 0 0 1 3 3zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5zm-6.5 1V14a3 3 0 0 0 3 3h3.5v-6.5z");
}
</style><path class="dhe1kmyoh"/>`,
		"fallback": "fluent:layout-cell-four-20-filled",
	});
}

export default Component;
