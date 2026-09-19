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
		"content": `<style>.cooa6dyoq {
  fill: currentColor;
  d: path("m21 12l-4-4v3H9v2h8v3z");
}

.f-r383bvg {
  fill: currentColor;
  d: path("M5 5h7V3H3v18h9v-2H5z");
}
</style><path class="f-r383bvg"/><path class="cooa6dyoq"/>`,
		"fallback": "ic:sharp-logout",
	});
}

export default Component;
