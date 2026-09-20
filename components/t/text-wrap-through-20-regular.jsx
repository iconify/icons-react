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
		"content": `<style>.f9aw_3bgf {
  fill: currentColor;
  d: path("M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M3.5 6h2.758a4.5 4.5 0 0 0-.502 1H3.5a.5.5 0 0 1 0-1m0 3h2v1h-2a.5.5 0 0 1 0-1m0 3h2v1h-2a.5.5 0 0 1 0-1m13 0h-2v1h2a.5.5 0 0 0 0-1m-8-3v1h3V9zm8 1h-2V9h2a.5.5 0 0 1 0 1m-8 2v1h3v-1zm8-5h-2.256a4.5 4.5 0 0 0-.502-1H16.5a.5.5 0 0 1 0 1m-13 8h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1m4-6.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0z");
}
</style><path class="f9aw_3bgf"/>`,
		"fallback": "fluent:text-wrap-through-20-regular",
	});
}

export default Component;
