import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f5yq8ybrl {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H22.25a2.25 2.25 0 0 1 2.25 2.25v.779L14 13.907L3.504 8.531zm0 2.467l10.154 5.2a.75.75 0 0 0 .684 0L24.5 10.215v9.036a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25z");
}
</style><path class="f5yq8ybrl"/>`,
		"fallback": "fluent:mail-28-regular",
	});
}

export default Component;
