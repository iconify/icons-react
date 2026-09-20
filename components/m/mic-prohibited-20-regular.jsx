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
		"content": `<style>.f7rf_ybgc {
  fill: currentColor;
  d: path("M9 13q.105 0 .21-.007q.165-.582.448-1.104A2 2 0 0 1 7 10V5.001a2 2 0 1 1 4 0v5q0 .138-.018.272q.47-.392 1.018-.672V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3m-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .819.179 1.596.5 2.294v.706a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 3.5 10a.5.5 0 0 1 1 0m10 9a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-8a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.5 3.5 0 0 0 14.5 11m-2.096 6.303a3.5 3.5 0 0 0 4.9-4.9z");
}
</style><path class="f7rf_ybgc"/>`,
		"fallback": "fluent:mic-prohibited-20-regular",
	});
}

export default Component;
