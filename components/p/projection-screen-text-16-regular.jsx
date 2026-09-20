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
		"content": `<style>.qx-s7xqgl {
  fill: currentColor;
  d: path("M14 2a1 1 0 1 1 0 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-3v1h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1h-3A2.5 2.5 0 0 1 2 9.5V4a1 1 0 0 1 0-2zM3 9.5A1.5 1.5 0 0 0 4.5 11h7A1.5 1.5 0 0 0 13 9.5V4H3zM9.5 9a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm1-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-1-2a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z");
}
</style><path class="qx-s7xqgl"/>`,
		"fallback": "fluent:projection-screen-text-16-regular",
	});
}

export default Component;
