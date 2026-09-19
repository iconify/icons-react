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
		"content": `<style>.q82-wgbfe {
  fill: currentColor;
  d: path("M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43l-1.93.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85");
}
</style><path class="q82-wgbfe"/>`,
		"fallback": "ic:twotone-flight-takeoff",
	});
}

export default Component;
