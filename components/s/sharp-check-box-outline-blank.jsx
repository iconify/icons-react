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
		"content": `<style>.ewqsqbb3w {
  fill: currentColor;
  d: path("M19 5v14H5V5zm2-2H3v18h18z");
}
</style><path class="ewqsqbb3w"/>`,
		"fallback": "ic:sharp-check-box-outline-blank",
	});
}

export default Component;
