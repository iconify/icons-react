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
		"content": `<style>.ke59q6-zs {
  fill: currentColor;
  d: path("M8.854 2.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708L10 3.793zM6 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-5.5 10v-10a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0");
}
</style><path class="ke59q6-zs"/>`,
		"fallback": "fluent:text-indent-increase-rtl-rotate-270-20-regular",
	});
}

export default Component;
