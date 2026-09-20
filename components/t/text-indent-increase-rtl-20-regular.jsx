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
		"content": `<style>.jbfviebei {
  fill: currentColor;
  d: path("M5 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-3 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M7.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm10.367-6.264a.5.5 0 0 0-.707 0l-1.414 1.415a.5.5 0 0 0 0 .707l1.414 1.414a.5.5 0 1 0 .707-.707l-1.06-1.06l1.06-1.062a.5.5 0 0 0 0-.707");
}
</style><path class="jbfviebei"/>`,
		"fallback": "fluent:text-indent-increase-rtl-20-regular",
	});
}

export default Component;
