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
		"content": `<style>.lr49rrbcw {
  fill: currentColor;
  d: path("M3 7v2h5v2H4v2h4v2H3v2h7V7zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z");
}
</style><path class="lr49rrbcw"/>`,
		"fallback": "ic:sharp-3g-mobiledata",
	});
}

export default Component;
