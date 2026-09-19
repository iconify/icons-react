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
		"content": `<style>.thcoy2yby {
  fill: currentColor;
  d: path("M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm7.056-7.654l1.282-1.535l4.607 3.85l-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7m0-2a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4");
}
</style><path class="thcoy2yby"/>`,
		"fallback": "ic:outline-snooze",
	});
}

export default Component;
