import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ykzgkncsu {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm1 5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m1 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1");
}
</style><path class="ykzgkncsu"/>`,
		"fallback": "fluent:textbox-align-bottom-center-16-filled",
	});
}

export default Component;
