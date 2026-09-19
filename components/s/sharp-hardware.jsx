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
		"content": `<style>.a5kwvozgu {
  fill: currentColor;
  d: path("m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3zM9 13v8h6v-8z");
}
</style><path class="a5kwvozgu"/>`,
		"fallback": "ic:sharp-hardware",
	});
}

export default Component;
