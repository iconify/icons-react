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
		"content": `<style>.ce56lbbkn {
  fill: currentColor;
  d: path("M22 2H2v16h16l4 4z");
}
</style><path class="ce56lbbkn"/>`,
		"fallback": "ic:sharp-mode-comment",
	});
}

export default Component;
