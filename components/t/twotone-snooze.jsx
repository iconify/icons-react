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
		"content": `<style>.oxwmksbhp {
  fill: currentColor;
  d: path("M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm8.337-9.19l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7");
}
</style><path class="oxwmksbhp"/>`,
		"fallback": "ic:twotone-snooze",
	});
}

export default Component;
