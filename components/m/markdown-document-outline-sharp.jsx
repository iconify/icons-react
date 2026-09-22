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
		"content": `<style>.kntlnslyw {
  fill: currentColor;
  d: path("M3 21V3h18v8h-2V5H5v14h5v2zm7-4v-2H7v2zm0-4v-2H7v2zm2 9v-9h10v9h-2v-7h-2v5h-2v-5h-2v7zM5 11v8V5z");
}
</style><path class="kntlnslyw"/>`,
		"fallback": "material-symbols:markdown-document-outline-sharp",
	});
}

export default Component;
