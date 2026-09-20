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
		"content": `<style>.itvcc32fg {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 8h14V5H5zm14 2H5v9h14zM5 8v2zm0 0V5zm0 2v9z");
}
</style><path class="itvcc32fg"/>`,
		"fallback": "material-symbols:toolbar-outline-sharp",
	});
}

export default Component;
