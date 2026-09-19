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
		"content": `<style>.kg-n76gtw {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 13H3V5h18z");
}
</style><path class="kg-n76gtw"/>`,
		"fallback": "ic:sharp-video-label",
	});
}

export default Component;
