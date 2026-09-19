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
		"content": `<style>.l119onb2g {
  fill: currentColor;
  d: path("M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71M20 20H6.83L20 6.83z");
}
</style><path class="l119onb2g"/>`,
		"fallback": "ic:round-signal-cellular-0-bar",
	});
}

export default Component;
