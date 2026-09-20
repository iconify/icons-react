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
		"content": `<style>.w7pf1flaa {
  fill: currentColor;
  d: path("M2.754 6a.75.75 0 1 0 0 1.5H25.25a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5H25.25a.75.75 0 0 0 0-1.5zm-.75 5.75a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5H18.25a.75.75 0 0 0 0-1.5z");
}
</style><path class="w7pf1flaa"/>`,
		"fallback": "fluent:text-description-28-regular",
	});
}

export default Component;
