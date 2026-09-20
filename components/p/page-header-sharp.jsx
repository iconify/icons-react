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
		"content": `<style>.c6hs-wbwx {
  fill: currentColor;
  d: path("M3 5V3h18v2zm0 16V7h18v14z");
}
</style><path class="c6hs-wbwx"/>`,
		"fallback": "material-symbols:page-header-sharp",
	});
}

export default Component;
