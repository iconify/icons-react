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
		"content": `<style>.bbor5-b8f {
  fill: currentColor;
  d: path("M11.5 16V8l-4 4zM5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="bbor5-b8f"/>`,
		"fallback": "material-symbols:right-panel-open-sharp",
	});
}

export default Component;
