import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e9p3-mb0m {
  fill: currentColor;
  d: path("M2.75 4.5a.75.75 0 0 0-.75.75v.867a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75m0 3.467a.75.75 0 0 0-.75.75v1.733a.75.75 0 0 0 1.5 0V8.717a.75.75 0 0 0-.75-.75m0 4.333a.75.75 0 0 0-.75.75v1.733a.75.75 0 0 0 1.5 0V13.05a.75.75 0 0 0-.75-.75m0 4.333a.75.75 0 0 0-.75.75v.867a.75.75 0 0 0 1.5 0v-.867a.75.75 0 0 0-.75-.75M21.25 4.5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-.75-.75M5.22 12.28a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L7.56 11h10.69a.75.75 0 0 1 0 1.5H7.56l3.72 3.72a.75.75 0 1 1-1.06 1.06z");
}
</style><path class="e9p3-mb0m"/>`,
		"fallback": "fluent:padding-left-24-regular",
	});
}

export default Component;
