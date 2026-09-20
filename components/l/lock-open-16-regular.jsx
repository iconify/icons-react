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
		"content": `<style>.pvtqpmbnz {
  fill: currentColor;
  d: path("M12 1a3 3 0 0 1 3 3v.5a.5.5 0 0 1-1 0V4a2 2 0 1 0-4 0v2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a3 3 0 0 1 3-3M5 7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="pvtqpmbnz"/>`,
		"fallback": "fluent:lock-open-16-regular",
	});
}

export default Component;
