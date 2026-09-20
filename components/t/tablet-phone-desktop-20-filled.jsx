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
		"content": `<style>.epvl9gn9c {
  fill: currentColor;
  d: path("M16.5 7A1.5 1.5 0 0 1 18 8.5v6a1.5 1.5 0 0 1-1.5 1.5H14v1h.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h.5v-1H9v-4a2 2 0 0 0-2-2H6V8.5A1.5 1.5 0 0 1 7.5 7zM7 11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm4 6h2v-1h-2zm2-14a2 2 0 0 1 2 2v1H7.5c-.561 0-1.078.188-1.495.5H6l-.002.004A2.5 2.5 0 0 0 5 8.5V10a2 2 0 0 0-2 2v.73c-.597-.347-1-.99-1-1.73V5a2 2 0 0 1 2-2z");
}
</style><path class="epvl9gn9c"/>`,
		"fallback": "fluent:tablet-phone-desktop-20-filled",
	});
}

export default Component;
