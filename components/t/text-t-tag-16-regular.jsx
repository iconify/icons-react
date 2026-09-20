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
		"content": `<style>.onx-m_b0l {
  fill: currentColor;
  d: path("M4 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V4H8.5v8H9a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1h.5V4H5v.5a.5.5 0 0 1-1 0zm.354 3.146a.5.5 0 0 1 0 .708L2.207 9.5l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m10.5 2.5l-2.5-2.5a.5.5 0 0 0-.708.708L13.793 9.5l-2.147 2.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708");
}
</style><path class="onx-m_b0l"/>`,
		"fallback": "fluent:text-t-tag-16-regular",
	});
}

export default Component;
