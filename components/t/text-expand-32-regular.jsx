import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dl3dfjbmi {
  fill: currentColor;
  d: path("M29 25a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM9 8.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m.25 2a.75.75 0 0 0-.75.75V15H4.75a.75.75 0 0 0 0 1.5H8.5v3.75a.75.75 0 0 0 1.5 0V16.5h3.75a.75.75 0 0 0 0-1.5H10v-3.75a.75.75 0 0 0-.75-.75M29 18a1 1 0 1 1 0 2H19a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H19a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z");
}
</style><path class="dl3dfjbmi"/>`,
		"fallback": "fluent:text-expand-32-regular",
	});
}

export default Component;
