import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j55i14jqe {
  fill: currentColor;
  d: path("M16 5a3 3 0 0 0-3 3v9.975l-.333.298a5 5 0 1 0 6.666 0L19 17.975V8a3 3 0 0 0-3-3m-5 3a5 5 0 0 1 10 0v9.101a7 7 0 1 1-10 0zm4 4a1 1 0 1 1 2 0v7.17a3.001 3.001 0 1 1-2 0z");
}
</style><path class="j55i14jqe"/>`,
		"fallback": "fluent:temperature-32-regular",
	});
}

export default Component;
