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
		"content": `<style>.v71dtjm8q {
  fill: currentColor;
  d: path("M22 6V4H6.82l2 2zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35l1.27-1.27L3.89 3.62zM4 6.27L14.73 17H4zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1");
}
</style><path class="v71dtjm8q"/>`,
		"fallback": "ic:phonelink-off",
	});
}

export default Component;
