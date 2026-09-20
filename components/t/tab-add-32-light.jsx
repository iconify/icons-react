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
		"content": `<style>.h-bv-k7ve {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.792a9 9 0 0 0-1-.777V7.5A3.5 3.5 0 0 0 24.5 4h-17A3.5 3.5 0 0 0 4 7.5v17A3.5 3.5 0 0 0 7.5 28h8.015q.354.528.777 1H7.5A4.5 4.5 0 0 1 3 24.5zm20 23a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="h-bv-k7ve"/>`,
		"fallback": "fluent:tab-add-32-light",
	});
}

export default Component;
