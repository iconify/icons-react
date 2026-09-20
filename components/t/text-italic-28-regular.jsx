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
		"content": `<style>.pwwrd419d {
  fill: currentColor;
  d: path("M22.251 4a.75.75 0 0 1 0 1.5h-4.233l-6.432 17h4.665a.75.75 0 0 1 0 1.5H5.754a.75.75 0 0 1 0-1.5h4.228l6.432-17h-4.66a.75.75 0 0 1 0-1.5z");
}
</style><path class="pwwrd419d"/>`,
		"fallback": "fluent:text-italic-28-regular",
	});
}

export default Component;
