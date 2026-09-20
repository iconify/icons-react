import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gc7asbwfa {
  fill: currentColor;
  d: path("M9.646 11.146c1.387-1.386 2.008-2.76 2.24-4.352A2 2 0 1 1 13 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708m-6 0c1.387-1.386 2.009-2.76 2.24-4.352A2 2 0 1 1 7 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708");
}
</style><path class="gc7asbwfa"/>`,
		"fallback": "fluent:text-quote-16-filled",
	});
}

export default Component;
