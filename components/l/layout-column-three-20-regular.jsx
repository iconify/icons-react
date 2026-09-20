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
		"content": `<style>.elq6n2b2a {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1V4zm6 12V4H8v12zm1 0h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1z");
}
</style><path class="elq6n2b2a"/>`,
		"fallback": "fluent:layout-column-three-20-regular",
	});
}

export default Component;
