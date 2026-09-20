import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lm3t0fhdg {
  fill: currentColor;
  d: path("M18.25 4A4.25 4.25 0 0 0 14 8.25v31.5A4.25 4.25 0 0 0 18.25 44h11.5A4.25 4.25 0 0 0 34 39.75V8.25A4.25 4.25 0 0 0 29.75 4zm-1.75 8.75h4.25a1.25 1.25 0 1 0 0-2.5H16.5v-2c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v31.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-2h4.25a1.25 1.25 0 1 0 0-2.5H16.5V31.5h8.25a1.25 1.25 0 1 0 0-2.5H16.5v-3.75h4.25a1.25 1.25 0 1 0 0-2.5H16.5V19h8.25a1.25 1.25 0 1 0 0-2.5H16.5z");
}
</style><path class="lm3t0fhdg"/>`,
		"fallback": "fluent:ruler-48-regular",
	});
}

export default Component;
