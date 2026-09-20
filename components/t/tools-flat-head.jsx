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
		"content": `<style>.sw7ov776y {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3l-1-7l2-8h6l2 8l-1 7zm1.3-8h5.4l-1.25-5h-2.9z");
}
</style><path class="sw7ov776y"/>`,
		"fallback": "material-symbols:tools-flat-head",
	});
}

export default Component;
