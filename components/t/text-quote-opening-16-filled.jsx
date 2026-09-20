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
		"content": `<style>.nk6jui3uu {
  fill: currentColor;
  d: path("M6.354 4.854c-1.387 1.386-2.009 2.76-2.24 4.352A2 2 0 1 1 3 11c.001-2.592.528-4.734 2.647-6.854a.5.5 0 1 1 .708.708m6 0c-1.387 1.386-2.008 2.76-2.24 4.352A2 2 0 1 1 9 11c.001-2.592.528-4.734 2.647-6.854a.5.5 0 0 1 .708.708");
}
</style><path class="nk6jui3uu"/>`,
		"fallback": "fluent:text-quote-opening-16-filled",
	});
}

export default Component;
