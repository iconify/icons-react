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
		"content": `<style>.l3hhis53x {
  fill: currentColor;
  d: path("M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z");
}
</style><path class="l3hhis53x"/>`,
		"fallback": "ic:twotone-done",
	});
}

export default Component;
