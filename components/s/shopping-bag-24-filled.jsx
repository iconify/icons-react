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
		"content": `<style>.njnuxnnzz {
  fill: currentColor;
  d: path("M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h6.01A4.23 4.23 0 0 1 13 19.25V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5v2h-1v12.25a2.75 2.75 0 1 0 5.5 0V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m1.5 0a1.5 1.5 0 1 1 3 0v2h-3z");
}
</style><path class="njnuxnnzz"/>`,
		"fallback": "fluent:shopping-bag-24-filled",
	});
}

export default Component;
