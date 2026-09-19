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
		"content": `<style>.srjn1b4iv {
  fill: currentColor;
  d: path("M5 15V3H3v14h11v-2zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6z");
}
</style><path class="srjn1b4iv"/>`,
		"fallback": "ic:sharp-airline-seat-legroom-normal",
	});
}

export default Component;
