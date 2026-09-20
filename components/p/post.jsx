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
		"content": `<style>.ln9on4c1z {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1.77-6.038h12.46v-1.116H5.77zm0 2.692h12.46v-.885H5.77z");
}
</style><path class="ln9on4c1z"/>`,
		"fallback": "material-symbols-light:post",
	});
}

export default Component;
