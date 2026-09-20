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
		"content": `<style>.aexnd4hgf {
  fill: currentColor;
  d: path("M6 22V10h12v12zM6 8V6h2v2zm10 0V6h2v2zM6 4V2h2v2zm5 0V2h2v2zm5 0V2h2v2z");
}
</style><path class="aexnd4hgf"/>`,
		"fallback": "material-symbols:move-selection-down-sharp",
	});
}

export default Component;
