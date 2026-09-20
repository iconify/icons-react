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
		"content": `<style>.ln64d-mth {
  fill: currentColor;
  d: path("M8 5.5a3.5 3.5 0 0 1 6-2.45a3.5 3.5 0 0 1 6 2.45V8h2.5A1.5 1.5 0 0 1 24 9.5V22a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9.5A1.5 1.5 0 0 1 5.5 8H8zM18.5 8V5.5a2 2 0 0 0-3.674-1.094A3.5 3.5 0 0 1 15 5.5V8zm-5-2.5a2 2 0 1 0-4 0V8h4zm2.5 4H5.5V22A2.5 2.5 0 0 0 8 24.5h8.877A4 4 0 0 1 16 22zm4 15a2.5 2.5 0 0 0 2.5-2.5V9.5h-5V22a2.5 2.5 0 0 0 2.5 2.5");
}
</style><path class="ln64d-mth"/>`,
		"fallback": "fluent:shopping-bag-28-regular",
	});
}

export default Component;
