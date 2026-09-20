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
		"content": `<style>.oc2312bsd {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V8H4z");
}
</style><path class="oc2312bsd"/>`,
		"fallback": "material-symbols-light:web-asset-outline-sharp",
	});
}

export default Component;
