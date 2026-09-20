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
		"content": `<style>.aate-ybxe {
  fill: currentColor;
  d: path("M6.5 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-18A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h9.016a9 9 0 0 1-1.004-2H13V6h12.5A2.5 2.5 0 0 1 28 8.5v7.015a9 9 0 0 1 2 1.828V8.5A4.5 4.5 0 0 0 25.5 4zm0 2H11v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6M23 30.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="aate-ybxe"/>`,
		"fallback": "fluent:panel-left-text-add-32-regular",
	});
}

export default Component;
