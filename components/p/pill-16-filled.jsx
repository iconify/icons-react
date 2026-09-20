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
		"content": `<style>.xbhugmbzz {
  fill: currentColor;
  d: path("M8 3.05A3.5 3.5 0 1 1 12.95 8L8 12.95A3.5 3.5 0 0 1 3.05 8zm2.122 6.364l2.12-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.121 2.12zm-2.268 1.44a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 1 0 .708.707z");
}
</style><path class="xbhugmbzz"/>`,
		"fallback": "fluent:pill-16-filled",
	});
}

export default Component;
