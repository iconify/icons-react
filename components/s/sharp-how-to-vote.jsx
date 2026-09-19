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
		"content": `<style>.r5i4__bzj {
  fill: currentColor;
  d: path("M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v6h18v-6zm1.81-5.04L13.45 1.6L5.68 9.36l6.36 6.36zm-6.35-3.55L17 7.95l-4.95 4.95l-3.54-3.54z");
}
</style><path class="r5i4__bzj"/>`,
		"fallback": "ic:sharp-how-to-vote",
	});
}

export default Component;
