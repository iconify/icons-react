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
		"content": `<style>.l6_w1bn9n {
  fill: currentColor;
  d: path("M23 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15M23 4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6h-7v12.878A8.96 8.96 0 0 0 14 23c0 1.85.56 3.57 1.517 5H11a1 1 0 1 1 0-2h2V6H6v3a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm.25 13.5a.75.75 0 0 0-.75.75V22h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V23.5h3.75a.75.75 0 0 0 0-1.5H24v-3.75a.75.75 0 0 0-.75-.75");
}
</style><path class="l6_w1bn9n"/>`,
		"fallback": "fluent:text-add-t-32-regular",
	});
}

export default Component;
