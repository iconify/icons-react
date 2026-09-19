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
		"content": `<style>.vqgl8bc-x {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm-1-4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1");
}
</style><path class="vqgl8bc-x"/>`,
		"fallback": "ic:round-sms-failed",
	});
}

export default Component;
