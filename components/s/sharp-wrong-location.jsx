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
		"content": `<style>.mcybtfbrd {
  fill: currentColor;
  d: path("m22.54 2.88l-1.42-1.42L19 3.59l-2.12-2.13l-1.42 1.42L17.59 5l-2.13 2.12l1.42 1.42L19 6.41l2.12 2.13l1.42-1.42L20.41 5z");
}

.u6owaebfb {
  fill: currentColor;
  d: path("M14 10V3.26c-.65-.17-1.32-.26-2-.26c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-.41-.04-.81-.09-1.2zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
}
</style><path class="u6owaebfb"/><path class="mcybtfbrd"/>`,
		"fallback": "ic:sharp-wrong-location",
	});
}

export default Component;
