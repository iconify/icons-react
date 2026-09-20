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
		"content": `<style>.x9vnd9q9m {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM3 4a1 1 0 0 1 1-1h2.293L3 6.293zm0 3.707L7.707 3h2.586L3 10.293zM11.707 3H12a1 1 0 0 1 1 1v.293L4.293 13H4a1 1 0 0 1-1-1v-.293zM13 5.707v2.586L8.293 13H5.707zm0 4V12a1 1 0 0 1-1 1H9.707z");
}
</style><path class="x9vnd9q9m"/>`,
		"fallback": "fluent:tab-in-private-16-regular",
	});
}

export default Component;
