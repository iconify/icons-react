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
		"content": `<style>.fced2hbbk {
  fill: currentColor;
  d: path("M2 21h6V6L5 3L2 6zm7 0h6V6l-3-3l-3 3zm7 0h6V6l-3-3l-3 3z");
}
</style><path class="fced2hbbk"/>`,
		"fallback": "material-symbols:outdoor-garden-rounded",
	});
}

export default Component;
