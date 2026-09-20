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
		"content": `<style>.hgpspid6g {
  fill: currentColor;
  d: path("M15 15h4v-2h-4zm0-4h4V9h-4zM3 17V7h8v2H5v6h4v-2H7v-2h4v6zm10 0V7h7l1 1v3l-1 1l1 1v3l-1 1z");
}
</style><path class="hgpspid6g"/>`,
		"fallback": "material-symbols:language-gb-english-outline-sharp",
	});
}

export default Component;
