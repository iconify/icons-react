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
		"content": `<style>.ddaiq_bso {
  fill: currentColor;
  d: path("M11 1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.257a5.5 5.5 0 0 1-.657-1H5a1 1 0 0 1-1-1v-.003h2.206a5.5 5.5 0 0 1-.184-1H4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.022q.516.048 1 .185V3a2 2 0 0 0-2-2M6 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 1h4v1H6zm10 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6 1.495a.5.5 0 0 0 .757.429l2.5-1.497a.5.5 0 0 0 0-.858l-2.5-1.497A.5.5 0 0 0 10 10z");
}
</style><path class="ddaiq_bso"/>`,
		"fallback": "fluent:learning-app-16-regular",
	});
}

export default Component;
