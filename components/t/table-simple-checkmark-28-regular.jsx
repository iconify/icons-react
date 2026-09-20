import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jjx0zcbii {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h6.5v8.75H4.5zm10.25 6.5V4.5h6.5a2.25 2.25 0 0 1 2.25 2.25v6.5zM4.5 14.75h8.75v8.75h-6.5a2.25 2.25 0 0 1-2.25-2.25zm17.278 2.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1.498-1.498a.75.75 0 0 1 1.06-1.06l.968.967l2.47-2.47a.75.75 0 0 1 1.06 0");
}
</style><path class="jjx0zcbii"/>`,
		"fallback": "fluent:table-simple-checkmark-28-regular",
	});
}

export default Component;
