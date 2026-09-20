import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipu7k8cwu {
  fill: currentColor;
  d: path("M13.25 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zM14 9.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 .75-.75m0 5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75m1.22-7.03a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06");
}
</style><path class="ipu7k8cwu"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-20-filled",
	});
}

export default Component;
