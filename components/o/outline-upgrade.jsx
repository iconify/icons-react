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
		"content": `<style>.i64c76btm {
  fill: currentColor;
  d: path("M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4L8 7.99z");
}
</style><path class="i64c76btm"/>`,
		"fallback": "ic:outline-upgrade",
	});
}

export default Component;
