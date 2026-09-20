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
		"content": `<style>.d-0qihdyl {
  fill: currentColor;
  d: path("M9.25 13.25V2.75a.75.75 0 0 1 1.493-.102l.007.102v10.5a.75.75 0 0 1-1.493.102zm-4 0V2.75a.75.75 0 0 1 1.493-.102l.007.102v10.5a.75.75 0 0 1-1.493.102z");
}
</style><path class="d-0qihdyl"/>`,
		"fallback": "fluent:re-order-vertical-16-filled",
	});
}

export default Component;
