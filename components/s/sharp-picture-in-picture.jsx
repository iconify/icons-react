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
		"content": `<style>.ro3u7ld2q {
  fill: currentColor;
  d: path("M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z");
}
</style><path class="ro3u7ld2q"/>`,
		"fallback": "ic:sharp-picture-in-picture",
	});
}

export default Component;
