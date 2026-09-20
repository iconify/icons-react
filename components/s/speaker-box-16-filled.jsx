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
		"content": `<style>.otahkbioe {
  fill: currentColor;
  d: path("M3 3.5A2.5 2.5 0 0 1 5.5 1h5A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5zM9 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-2.5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M8 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="otahkbioe"/>`,
		"fallback": "fluent:speaker-box-16-filled",
	});
}

export default Component;
