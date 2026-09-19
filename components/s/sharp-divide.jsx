import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j9m2ldb1e {
  fill: currentColor;
  d: path("M5 11h14v2H5zm7.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4");
}
</style><path class="j9m2ldb1e"/>`,
		"fallback": "ic:sharp-divide",
	});
}

export default Component;
