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
		"content": `<style>.dd9hwbbgr {
  fill: currentColor;
  d: path("M10 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M1.587 9.136a1.99 1.99 0 0 1 0-2.822l4.74-4.716a2 2 0 0 1 1.41-.584L10.986 1A2 2 0 0 1 13 3.01l-.019 2.58a5.5 5.5 0 0 0-1-.388l.017-2.2a1 1 0 0 0-1.007-1.004l-3.25.013a1 1 0 0 0-.705.292L2.296 7.02a.994.994 0 0 0 0 1.41l2.743 2.73c.071.596.238 1.163.484 1.684a2 2 0 0 1-.64-.428zM15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11z");
}
</style><path class="dd9hwbbgr"/>`,
		"fallback": "fluent:tag-add-16-regular",
	});
}

export default Component;
