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
		"content": `<style>.jbws55bcr {
  fill: currentColor;
  d: path("M22 2H2v16h16l4 4zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4z");
}
</style><path class="jbws55bcr"/>`,
		"fallback": "ic:sharp-add-comment",
	});
}

export default Component;
