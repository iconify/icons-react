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
		"content": `<style>.r9t77fe1k {
  fill: currentColor;
  d: path("M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5l-5-5h7z");
}
</style><path class="r9t77fe1k"/>`,
		"fallback": "ic:sharp-functions",
	});
}

export default Component;
