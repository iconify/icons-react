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
		"content": `<style>.a8vvoplie {
  fill: currentColor;
  d: path("M5 14h3v6H5zm6-5h3v11h-3z");
}
</style><path class="a8vvoplie"/>`,
		"fallback": "ic:twotone-signal-cellular-alt-2-bar",
	});
}

export default Component;
