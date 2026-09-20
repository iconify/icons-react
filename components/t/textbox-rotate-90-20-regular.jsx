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
		"content": `<style>.ts5bp40xz {
  fill: currentColor;
  d: path("M13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-3 0a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm10 8a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5zm-1 0v-9A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5");
}
</style><path class="ts5bp40xz"/>`,
		"fallback": "fluent:textbox-rotate-90-20-regular",
	});
}

export default Component;
