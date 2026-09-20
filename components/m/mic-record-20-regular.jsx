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
		"content": `<style>.znuan8boq {
  fill: currentColor;
  d: path("M9 13q.105 0 .21-.007q.165-.582.448-1.104A2 2 0 0 1 7 10V5.001a2 2 0 1 1 4 0v5q0 .138-.018.272q.47-.392 1.018-.672V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3m-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .819.179 1.596.5 2.294v.706a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 3.5 10a.5.5 0 0 1 1 0M17 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-8 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0");
}
</style><path class="znuan8boq"/>`,
		"fallback": "fluent:mic-record-20-regular",
	});
}

export default Component;
