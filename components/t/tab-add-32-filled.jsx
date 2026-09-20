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
		"content": `<style>.n-9jo3b-v {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.792a9 9 0 0 0-2.5-1.586V7.5a2 2 0 0 0-2-2h-17a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h7.206a9 9 0 0 0 1.586 2.5H7.5A4.5 4.5 0 0 1 3 24.5zm20 23a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="n-9jo3b-v"/>`,
		"fallback": "fluent:tab-add-32-filled",
	});
}

export default Component;
