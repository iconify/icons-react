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
		"content": `<style>.gw_mod-bn {
  fill: currentColor;
  d: path("M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z");
}
</style><path class="gw_mod-bn"/>`,
		"fallback": "ic:sharp-notes",
	});
}

export default Component;
