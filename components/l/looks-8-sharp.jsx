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
		"content": `<style>.sg9os3qwc {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5h14v14zm4-2h6v-4l-1-1l1-1V7H9v4l1 1l-1 1zm2-6V9h2v2zm0 4v-2h2v2z");
}
</style><path class="sg9os3qwc"/>`,
		"fallback": "material-symbols:looks-8-sharp",
	});
}

export default Component;
