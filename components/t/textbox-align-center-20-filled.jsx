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
		"content": `<style>.q5oyw5bwq {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm-8 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="q5oyw5bwq"/>`,
		"fallback": "fluent:textbox-align-center-20-filled",
	});
}

export default Component;
