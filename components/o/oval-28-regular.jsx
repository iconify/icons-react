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
		"content": `<style>.e28qtbvrc {
  fill: currentColor;
  d: path("M2 14a9 9 0 0 1 9-9h6a9 9 0 1 1 0 18h-6a9 9 0 0 1-9-9m9-7.5a7.5 7.5 0 1 0 0 15h6a7.5 7.5 0 0 0 0-15z");
}
</style><path class="e28qtbvrc"/>`,
		"fallback": "fluent:oval-28-regular",
	});
}

export default Component;
