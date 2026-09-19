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
		"content": `<style>.poecy-beb {
  fill: currentColor;
  d: path("m7 12l-2-2l-2 2l2 2zm10.71-4.29L12 2h-1v7.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76zM19 10l-2 2l2 2l2-2z");
}
</style><path class="poecy-beb"/>`,
		"fallback": "ic:sharp-bluetooth-connected",
	});
}

export default Component;
