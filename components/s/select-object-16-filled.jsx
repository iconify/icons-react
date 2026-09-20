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
		"content": `<style>.eut-chb5v {
  fill: currentColor;
  d: path("M3.5 11a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-3.25.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM3.75 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 3.75 6m8.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M3.5 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M9.25 3a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="eut-chb5v"/>`,
		"fallback": "fluent:select-object-16-filled",
	});
}

export default Component;
