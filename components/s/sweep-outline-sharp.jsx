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
		"content": `<style>.lhq8tkb-r {
  fill: currentColor;
  d: path("M10 18v-2h6v2zm-3.95 0L.375 12.325L1.8 10.9l4.25 4.25L15.2 6l1.425 1.425zM14 14v-2h6v2zm4-4V8h6v2z");
}
</style><path class="lhq8tkb-r"/>`,
		"fallback": "material-symbols:sweep-outline-sharp",
	});
}

export default Component;
