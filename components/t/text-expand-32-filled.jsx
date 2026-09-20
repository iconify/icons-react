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
		"content": `<style>.rwl217f_l {
  fill: currentColor;
  d: path("M28.75 25a1.25 1.25 0 1 1 0 2.5H9.25a1.25 1.25 0 1 1 0-2.5zM9 8.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m.25 2a.75.75 0 0 0-.75.75V15H4.75a.75.75 0 0 0 0 1.5H8.5v3.75a.75.75 0 0 0 1.5 0V16.5h3.75a.75.75 0 0 0 0-1.5H10v-3.75a.75.75 0 0 0-.75-.75m19.5 7.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5H9.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="rwl217f_l"/>`,
		"fallback": "fluent:text-expand-32-filled",
	});
}

export default Component;
