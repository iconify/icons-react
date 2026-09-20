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
		"content": `<style>.cck2w9shb {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 5.754 24H22.25A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H22.25a2.25 2.25 0 0 1 2.25 2.25v12.5a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25zM10 10.251v7.5a1 1 0 0 0 1.472.881l7-3.75a1 1 0 0 0 0-1.762l-7-3.75a1 1 0 0 0-1.472.88");
}
</style><path class="cck2w9shb"/>`,
		"fallback": "fluent:video-clip-28-regular",
	});
}

export default Component;
