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
		"content": `<style>.xoibrbc9z {
  fill: currentColor;
  d: path("M17.75 16a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM2.72 9.22a.75.75 0 0 1 .976-.073l.084.073l2 2a.75.75 0 0 1 .073.976l-.073.084l-2 2a.75.75 0 0 1-1.133-.976l.073-.084l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06M20.75 11a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5zm-3-5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z");
}
</style><path class="xoibrbc9z"/>`,
		"fallback": "fluent:text-indent-increase-ltr-24-regular",
	});
}

export default Component;
