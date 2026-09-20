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
		"content": `<style>.b21ssyjie {
  fill: currentColor;
  d: path("M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zm0-20.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zM3 16.25A2.75 2.75 0 0 0 5.75 19H9.5V9H5.75A2.75 2.75 0 0 0 3 11.75zM17 19h-6V9h6zm1.5 0V9h3.75A2.75 2.75 0 0 1 25 11.75v4.5A2.75 2.75 0 0 1 22.25 19z");
}
</style><path class="b21ssyjie"/>`,
		"fallback": "fluent:table-insert-row-28-filled",
	});
}

export default Component;
