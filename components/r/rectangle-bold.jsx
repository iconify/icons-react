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
		"content": `<style>.h31359bix {
  fill: currentColor;
  d: path("M9 19H15C17.8089 19 19.2134 19 20.2223 18.326C20.659 18.034 21.034 17.659 21.3259 17.222C22 16.213 22 14.809 22 12C22 9.191 22 7.787 21.3259 6.778C21.034 6.341 20.659 5.966 20.2223 5.674C19.2134 5 17.8089 5 15 5H9C6.1911 5 4.7866 5 3.7777 5.674C3.341 5.966 2.966 6.341 2.6741 6.778C2 7.787 2 9.191 2 12C2 14.809 2 16.213 2.6741 17.222C2.966 17.659 3.341 18.034 3.7777 18.326C4.7866 19 6.1911 19 9 19Z");
}
</style><path class="h31359bix"/>`,
		"fallback": "solar:rectangle-bold",
	});
}

export default Component;
