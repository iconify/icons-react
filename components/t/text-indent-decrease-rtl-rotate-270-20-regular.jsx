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
		"content": `<style>.jdsgg5bpc {
  fill: currentColor;
  d: path("M11.146 4.854a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708L10 3.707zM6 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-5.5 0a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z");
}
</style><path class="jdsgg5bpc"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-rotate-270-20-regular",
	});
}

export default Component;
