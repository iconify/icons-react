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
		"content": `<style>.d4zzrzb5l {
  fill: currentColor;
  d: path("M7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="d4zzrzb5l"/>`,
		"fallback": "material-symbols:padding-outline-sharp",
	});
}

export default Component;
