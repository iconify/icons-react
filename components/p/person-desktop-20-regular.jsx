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
		"content": `<style>.fmq54kdzy {
  fill: currentColor;
  d: path("M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18q.363 0 .718-.02a2 2 0 0 1-1.464-1.003c-1.424-.09-2.667-.44-3.581-1.024C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1H9c0-.364.097-.706.268-1zM10 12a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1z");
}
</style><path class="fmq54kdzy"/>`,
		"fallback": "fluent:person-desktop-20-regular",
	});
}

export default Component;
