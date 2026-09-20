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
		"content": `<style>.nyqqyg3-x {
  fill: currentColor;
  d: path("M5.5 16.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m-3-5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75m3-5A.75.75 0 0 1 6.25 6h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m13.696 2.397a.75.75 0 0 0-.976 1.133l1.47 1.47l-1.47 1.47l-.073.084a.75.75 0 0 0 1.133.976l2-2l.073-.084a.75.75 0 0 0-.073-.976l-2-2z");
}
</style><path class="nyqqyg3-x"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-24-regular",
	});
}

export default Component;
