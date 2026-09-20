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
		"content": `<style>.s7xtcdcqs {
  fill: currentColor;
  d: path("M10 15.577L15.577 12L10 8.423zM3 19V5h18v14z");
}
</style><path class="s7xtcdcqs"/>`,
		"fallback": "material-symbols-light:smart-display-sharp",
	});
}

export default Component;
