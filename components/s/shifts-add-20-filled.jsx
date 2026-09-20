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
		"content": `<style>.j8uy5vb7w {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v3.6a5.5 5.5 0 0 1 7.4 7.4H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4.5 3a.5.5 0 0 1 .5.5V9h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m-.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6z");
}
</style><path class="j8uy5vb7w"/>`,
		"fallback": "fluent:shifts-add-20-filled",
	});
}

export default Component;
