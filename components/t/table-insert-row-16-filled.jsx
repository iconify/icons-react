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
		"content": `<style>.wo86m6jfi {
  fill: currentColor;
  d: path("M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 9.5A1.5 1.5 0 0 0 3.5 11H5V5H3.5A1.5 1.5 0 0 0 2 6.5zm8 1.5H6V5h4zm1 0V5h1.5A1.5 1.5 0 0 1 14 6.5v3a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="wo86m6jfi"/>`,
		"fallback": "fluent:table-insert-row-16-filled",
	});
}

export default Component;
