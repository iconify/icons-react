import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.em0c6r5qn {
  fill: currentColor;
  d: path("M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6m6-5a5 5 0 0 0 0 10h4a5 5 0 0 0 0-10z");
}
</style><path class="em0c6r5qn"/>`,
		"fallback": "fluent:oval-20-regular",
	});
}

export default Component;
