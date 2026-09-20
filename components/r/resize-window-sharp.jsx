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
		"content": `<style>.r2d71j6cg {
  fill: currentColor;
  d: path("M19.6 21L3 4.425L4.425 3L21 19.575zM9.575 21L3 14.425L4.425 13L11 19.575z");
}
</style><path class="r2d71j6cg"/>`,
		"fallback": "material-symbols:resize-window-sharp",
	});
}

export default Component;
