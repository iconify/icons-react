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
		"content": `<style>.ied6zrbab {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v7.75A2.25 2.25 0 0 1 19.75 22H12C6.477 22 2 17.523 2 12");
}
</style><path class="ied6zrbab"/>`,
		"fallback": "fluent:teardrop-bottom-right-24-filled",
	});
}

export default Component;
